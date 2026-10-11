package com.ismartcoding.plain.rust

internal actual object RustCoreBridge {
    init { System.loadLibrary("plain_rust") }
    private external fun startNative(databasePath: String, token: String, configJson: String): String
    private external fun stopNative(): String
    actual fun start(databasePath: String, token: String, configJson: String): String = startNative(databasePath, token, configJson)
    private external fun graphqlNative(request: String, hostApi: Boolean): String
    actual fun graphql(request: String, hostApi: Boolean): String = graphqlNative(request, hostApi)
    private external fun nextNative(stream: String): String
    private external fun sendNative(action: String, message: String, bytes: ByteArray): String
    actual fun next(stream: String): String = nextNative(stream)
    actual fun send(action: String, message: String, bytes: ByteArray): String = sendNative(action, message, bytes)
    actual fun stop() { val error = stopNative(); check(error.isEmpty()) { error } }
}
