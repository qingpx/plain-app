package com.ismartcoding.plain.rust.bridge

internal actual object RustPrefsBridge {
    init { System.loadLibrary("plain_rust") }
    private external fun openNative(systemPath: String, userPath: String)
    actual fun open(systemPath: String, userPath: String) = openNative(systemPath, userPath)
}
