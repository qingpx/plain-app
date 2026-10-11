package com.ismartcoding.plain.rust.bridge

internal expect object RustPrefsBridge {
    fun open(systemPath: String, userPath: String)
}
