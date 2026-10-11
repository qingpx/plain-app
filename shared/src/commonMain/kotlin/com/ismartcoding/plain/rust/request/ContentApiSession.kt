package com.ismartcoding.plain.rust.request

/**
 * How a Rust core authenticates the caller.
 *
 * A core has two remote modes and they differ in how the body is protected:
 * paired devices send no `Authorization` and encrypt the body with the session
 * key from the `c-id` lookup; the web console logs in with a password, which
 * yields a `CUSTOM` session that authenticates with a Bearer header and a
 * plaintext body.
 *
 * The native bridge is a third case entirely — it is an in-process call and
 * authenticates neither, so it needs no strategy.
 */
sealed interface SessionAuth {
    /** Paired device: `c-id` header, body XChaCha-encrypted with the session key. */
    data class Paired(val sessionKey: ByteArray) : SessionAuth

    /** Web console password login (`CUSTOM` session): Bearer header, plaintext body. */
    data class Bearer(val token: String) : SessionAuth
}

/**
 * The address and credentials of another device's Rust core, or of this device's
 * own local REST endpoint.
 *
 * Identity is always the `c-id` header; [auth] decides what else travels with
 * the request. For the local REST routes the credential is a Bearer token
 * compared against the core's own token — a different mechanism from either
 * remote GraphQL mode, which is why the strategy lives here rather than being
 * baked into one field.
 */
class ContentApiSession(
    val baseUrl: String,
    val clientId: String,
    private val auth: SessionAuth,
) {
    internal fun headers(): Map<String, String> = buildMap {
        put("c-id", clientId)
        when (auth) {
            is SessionAuth.Bearer -> put("Authorization", "Bearer ${auth.token}")
            is SessionAuth.Paired -> Unit
        }
    }

    /** The body protection this strategy implies, or null for a plaintext body. */
    internal val sessionKey: ByteArray?
        get() = (auth as? SessionAuth.Paired)?.sessionKey
}