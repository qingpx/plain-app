package com.ismartcoding.plain.rust.http

fun interface HttpLogSink {
    fun log(message: String)
}

var httpLogSink: HttpLogSink = HttpLogSink { println("[HttpLog] $it") }
