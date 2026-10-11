package com.ismartcoding.plain.rust

internal expect object RustCoreBridge {
    fun start(databasePath: String, token: String, configJson: String): String
    fun graphql(request: String, hostApi: Boolean): String
    fun next(stream: String): String
    fun send(action: String, message: String, bytes: ByteArray): String
    fun stop()
}
