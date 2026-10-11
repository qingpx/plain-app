package com.ismartcoding.plain.rust.bridge

internal expect object RustPrefsBridge {
    fun open(systemPath: String, userPath: String)

    /**
     * The whole user-settings store as one JSON object, with Rust's defaults
     * already merged. One call seeds every App-side settings flow, so startup
     * needs no per-key round trip and Kotlin never becomes a second source of
     * defaults. Keys are the serde camelCase names — the GraphQL field names.
     */
    fun userSnapshot(): String

    /**
     * Persists one `{"field": value}` patch through the same Rust write path
     * the GraphQL resolvers use, so validation, persistence, the
     * `PREFS_UPDATED` broadcast and the mDNS / desktop-access effects all
     * still happen. Throws when Rust rejects the patch.
     */
    fun updateUser(patchJson: String)

    /**
     * Runs one user-settings action — the commands that are more than a field
     * write, such as de-duplicating a recent search or deleting playlist
     * entries. Rust keeps enforcing the limits and cross-field rules.
     */
    fun userAction(actionJson: String)
}