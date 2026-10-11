package com.ismartcoding.plain.rust

import com.ismartcoding.plain.api.*
import com.ismartcoding.plain.events.*
import com.ismartcoding.plain.lib.JsonHelper
import com.ismartcoding.plain.lib.logcat.LogCat
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.*
import kotlinx.serialization.json.JsonObject

object PlainRust {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Default)
    private val incoming = MutableSharedFlow<RustEvent>(extraBufferCapacity = 64)
    val events: SharedFlow<RustEvent> = incoming.asSharedFlow()
    internal val hostRequests = Channel<String>(32)
    private var started = false
    private val capabilities = MutableStateFlow<HostEventCapabilities?>(null)

    internal fun initialize(databasePath: String, token: String, config: String): String = RustCoreBridge.start(databasePath, token, config)
    internal suspend fun graphql(request: String, hostApi: Boolean): String = withContext(RustDispatchers.requests) { RustCoreBridge.graphql(request, hostApi) }
    internal fun stopHttp() = RustCoreBridge.stop()

    suspend fun request(command: RustCommand): JsonObject = when (command) {
        is RustCommand.Graphql -> RustContentApi.executeTransport(command.document, command.session, command.longRunning, command.variables, command.operationName, command.hostApi)
    }

    internal fun start(sessionProvider: () -> ContentApiSession) {
        check(!started) { "PlainRust already started" }
        capabilities.value = JsonHelper.jsonDecode(RustCoreBridge.next("capabilities"))
        started = true
        RustHostApi.start(scope, sessionProvider)
        scope.launch { pump("host") { hostRequests.send(it) } }
        scope.launch(start = CoroutineStart.UNDISPATCHED) {
            events.collect { event ->
                try {
                    if (event.reconcile) RustEventProjection.reconcile()
                    RustEventProjection.apply(event)
                } catch (cancelled: CancellationException) { throw cancelled }
                catch (error: Exception) { LogCat.e("Rust event projection", error) }
            }
        }
        scope.launch {
            try { RustEventProjection.reconcile() }
            catch (cancelled: CancellationException) { throw cancelled }
            catch (error: Exception) { LogCat.e("Rust initial reconciliation", error) }
            pump("events") { incoming.emit(JsonHelper.jsonDecode<RustEvent>(it)) }
        }
    }

    private suspend fun pump(stream: String, consume: suspend (String) -> Unit) {
        while (currentCoroutineContext().isActive) {
            val value = withContext(RustDispatchers.events) { RustCoreBridge.next(stream) }
            if (value.isNotEmpty()) consume(value)
        }
    }

    suspend fun publish(event: HostEvent): Int {
        val capabilities = withTimeoutOrNull(5_000) { capabilities.filterNotNull().first() } ?: return 0
        require(capabilities.accepts(event.type, event.data)) { "${event.type} is not a host-produced event" }
        val error = withContext(RustDispatchers.requests) {
            when (val data = event.data) {
                is HostEventData.Text -> RustCoreBridge.send("text", JsonHelper.jsonEncode(HostEventPacket(event.type.name, data.value)), byteArrayOf())
                is HostEventData.Binary -> RustCoreBridge.send("binary", event.type.name, data.value)
            }
        }
        require(error.isEmpty()) { error }
        return com.ismartcoding.plain.features.session.onlineClientIds.value.size
    }
}
