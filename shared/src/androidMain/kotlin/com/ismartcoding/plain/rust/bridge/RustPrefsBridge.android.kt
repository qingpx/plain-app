package com.ismartcoding.plain.rust.bridge

internal actual object RustPrefsBridge {
    init { System.loadLibrary("plain_rust") }

    private external fun openNative(systemPath: String, userPath: String)
    private external fun userSnapshotNative(): String
    private external fun updateUserNative(patchJson: String)
    private external fun userActionNative(actionJson: String)

    actual fun open(systemPath: String, userPath: String) = openNative(systemPath, userPath)
    actual fun userSnapshot(): String = userSnapshotNative()
    actual fun updateUser(patchJson: String) = updateUserNative(patchJson)
    actual fun userAction(actionJson: String) = userActionNative(actionJson)
}