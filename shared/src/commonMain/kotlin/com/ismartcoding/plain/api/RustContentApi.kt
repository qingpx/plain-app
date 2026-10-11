package com.ismartcoding.plain.api

import com.ismartcoding.plain.rust.*
import com.ismartcoding.plain.lib.JsonHelper

import com.ismartcoding.plain.events.*
import com.ismartcoding.plain.features.feed.FeedWorkerState
import com.ismartcoding.plain.features.feed.FeedWorkerStatus
import com.ismartcoding.plain.lib.sendEvent
import com.ismartcoding.plain.platform.*
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.serialization.json.*
import kotlin.concurrent.Volatile

/** A refusal or transport failure from the local Rust core. */
class RustApiException(message: String, cause: Throwable? = null) : Exception(message, cause)

object RustContentApi {
    private val lock = PlatformLock()
    private val client by lazy { createPlainHttpClient(PlainHttpClientSpec.Local()) }
    private val transferClient by lazy { createPlainHttpClient(PlainHttpClientSpec.Local(15 * 60)) }
    private val statusLock = Mutex()
    @Volatile private var localSession: ContentApiSession? = null
    private val syncStates = MutableStateFlow<Map<String, Pair<String, String>>>(emptyMap())

    internal fun startedSession(): ContentApiSession? = localSession

    internal suspend fun transportSession(): ContentApiSession {
        return checkNotNull(localSession) { "Rust HTTP server is not initialized" }
    }

    val directory: String get() = "${prefsFilePath().substringBeforeLast('/')}/rust-content"

    @Volatile internal var httpGeneration: Long = 0L
        private set
    private var sessionToken: String? = null
    private var collectorsStarted = false

    fun start() = lock.withLock {
        if (httpGeneration != 0L) return@withLock
        val token = sessionToken ?: generateChaCha20Key().also { sessionToken = it }
        val config = RustHttpServerConfig(
            isDebugBuild(), getDeviceName(), RustWebAssets.ensure(),
        )
        val ports = JsonHelper.jsonDecode<RustHttpServerResult>(PlainRust.initialize(
            "$directory/plain-content.db", token, JsonHelper.jsonEncode(config)))
        check(ports.errorCode.isEmpty()) { ports.error }
        localSession = ContentApiSession("http://127.0.0.1:${ports.httpPort}", "local", token)
        if (!collectorsStarted) {
            PlainRust.start { checkNotNull(localSession) }
            collectorsStarted = true
        }
        kotlinx.coroutines.runBlocking(com.ismartcoding.plain.platform.IODispatcher) { com.ismartcoding.plain.preferences.RustSystemState.refresh() }
        httpGeneration = ports.generation

    }

    internal fun stopHttp() = lock.withLock {
        PlainRust.stopHttp()
        httpGeneration = 0L
    }

    internal fun httpFailed(generation: Long): Boolean = lock.withLock {
        if (httpGeneration == 0L || httpGeneration != generation) return@withLock false
        httpGeneration = 0L
        true
    }

    suspend fun query(selection: String, session: ContentApiSession? = null): JsonObject = execute("query { $selection }", session)
    suspend fun mutate(selection: String, session: ContentApiSession? = null, longRunning: Boolean = false): JsonObject = execute("mutation { $selection }", session, longRunning)

    suspend fun graphql(document: String, variables: Map<String, JsonElement> = emptyMap(), session: ContentApiSession? = null): JsonObject = execute(document, session, variables = variables)

    private suspend fun execute(document: String, session: ContentApiSession?, longRunning: Boolean = false, variables: Map<String, JsonElement> = emptyMap()): JsonObject =
        decodeGraphqlResponse(PlainRust.request(RustCommand.Graphql(document, variables, session, longRunning, hostApi = true)).toString())

    internal suspend fun executeTransport(document: String, session: ContentApiSession?, longRunning: Boolean = false, variables: Map<String, JsonElement> = emptyMap(), operationName: String? = null, hostApi: Boolean = false): JsonObject {
        val target = session ?: checkNotNull(localSession)
        val body = JsonHelper.jsonEncode(GraphqlRequest(document, variables, operationName))
        if (session == null || session == localSession) return JsonHelper.jsonDecode(PlainRust.graphql(body, hostApi))
        val response = (if (longRunning) transferClient else client).postText("${target.baseUrl}/graphql", body, "application/json", target.headers())
        response.use {
            check(it.isOk()) { "Rust API returned HTTP ${it.status}" }
            return JsonHelper.jsonDecode(it.bodyAsText())
        }
    }

    private fun decodeGraphqlResponse(body: String): JsonObject {
        val result = JsonHelper.jsonDecode<JsonObject>(body)
        val errors = result["errors"] as? JsonArray
        check(errors.isNullOrEmpty()) { errors?.joinToString { error -> error.jsonObject["message"]?.jsonPrimitive?.content ?: "Rust API error" } ?: "Rust API error" }
        return result.getValue("data").jsonObject
    }

    /**
     * Posts a JSON-RPC style body to the local Rust core.
     *
     * Rust refusals (login rate limits, revoked sessions, failed ECDH, internal
     * errors) are returned as [Result.failure] rather than thrown: several
     * callers run on the UI path, where an [IllegalStateException] from `check`
     * used to crash the app instead of surfacing the refusal. Callers that
     * already expect a refusal should unwrap with a message.
     */
    suspend fun postJson(path: String, body: JsonObject, longRunning: Boolean = false, session: ContentApiSession? = null): Result<JsonObject> {
        val target = session ?: checkNotNull(localSession)
        return (if (longRunning) transferClient else client).postText("${target.baseUrl}/$path", body.toString(), "application/json", target.headers()).use {
            val result = runCatching { JsonHelper.jsonDecode<JsonElement>(it.bodyAsText()).jsonObject }
                .getOrElse { error -> return Result.failure(RustApiException("Rust API returned an unreadable body", error)) }
            if (!it.isOk()) {
                val message = result["error"]?.jsonPrimitive?.contentOrNull ?: "Rust API returned HTTP ${it.status}"
                return Result.failure(RustApiException(message))
            }
            Result.success(result)
        }
    }

    /**
     * Convenience for callers that treat a Rust refusal as a programming error
     * (background workers, tests). UI paths should use [postJson] and handle
     * the failure, so a refusal cannot crash the app.
     */
    suspend fun postJsonOrThrow(path: String, body: JsonObject, longRunning: Boolean = false): JsonObject =
        postJson(path, body, longRunning).getOrThrow()

    suspend fun postStream(path: String, body: JsonObject): PlainResponse {
        val target = checkNotNull(localSession)
        return transferClient.postText("${target.baseUrl}/$path", body.toString(), "application/json", target.headers())
    }

    suspend fun sync(feedId: String) {
        val key = feedId.ifEmpty { "all" }
        mutate("syncFeeds(id: ${if (feedId.isEmpty()) "null" else gql(feedId)})")
        refreshSyncStates()
        val completed = withTimeout(5 * 60 * 1000L) {
            syncStates.first { it[key]?.first?.let { status -> status != "PENDING" } == true }.getValue(key)
        }
        check(completed.first == "COMPLETED") { completed.second.ifEmpty { "Feed sync failed" } }
    }

    internal suspend fun refreshSyncStates() = statusLock.withLock {
        val values = query("feedSyncStates { feedId status error }")["feedSyncStates"]!!.jsonArray
        val states = values.associate { value ->
            val row = value.jsonObject
            row.getValue("feedId").jsonPrimitive.content to (row.getValue("status").jsonPrimitive.content to row.getValue("error").jsonPrimitive.content)
        }
        syncStates.value = states
        withContext(Dispatchers.Main) {
            states.forEach { (id, state) ->
                val status = FeedWorkerStatus.valueOf(state.first)
                FeedWorkerState.statusMap[id] = status
                if (state.second.isEmpty()) FeedWorkerState.errorMap.remove(id) else FeedWorkerState.errorMap[id] = state.second
                sendEvent(HFeedStatusEvent(id, status))
            }
        }
    }

    suspend fun publish(event: HostEvent): Int = PlainRust.publish(event)
}
