package com.ismartcoding.plain.ble

import com.ismartcoding.plain.api.RustContentApi
import com.ismartcoding.plain.api.ContentApiSession
import com.ismartcoding.plain.lib.JsonHelper
import com.ismartcoding.plain.platform.*
import kotlinx.coroutines.*
import kotlinx.coroutines.selects.select
import kotlinx.serialization.Serializable

internal object BleDataChannel {
    private val client by lazy { createPlainHttpClient(PlainHttpClientSpec.HttpHost) }

    /**
     * Handles one *incoming* peer BLE request: Rust dispatches the assembled
     * request over `/chat/ble-incoming` and returns the encoded response. The
     * outgoing direction no longer round-trips through here — Rust asks the App
     * for the whole exchange in a single host call (see `BleTransport`).
     */
    suspend fun incoming(remoteHost: String, characteristicUuid: String, message: ByteArray): ByteArray = withTimeout(120_000) {
        val target = session()
        var response: ByteArray? = null
        client.webSocket("${target.baseUrl.replace("http://", "ws://")}/chat/ble-incoming", target.headers()) { socket ->
            socket.sendText(JsonHelper.jsonEncode(ConnectionFacts(remoteHost, characteristicUuid)))
            socket.sendBinary(message)
            response = withTimeout(120_000) { checkNotNull(socket.incoming.receive().binary) { "Expected BLE response bytes" } }
        }
        checkNotNull(response)
    }
    private suspend fun session(): ContentApiSession { return RustContentApi.transportSession() }
    @Serializable private data class ConnectionFacts(val remoteHost: String, val characteristicUuid: String)
}
