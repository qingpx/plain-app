package com.ismartcoding.plain.rust.bridge

import com.ismartcoding.plain.lib.JsonHelper
import com.ismartcoding.plain.rustprefs.plain_events_next
import com.ismartcoding.plain.rustprefs.plain_events_send
import kotlinx.serialization.json.*
import com.ismartcoding.plain.rustprefs.plain_graphql
import com.ismartcoding.plain.rustprefs.plain_http_stop
import com.ismartcoding.plain.rustprefs.plain_core_start
import com.ismartcoding.plain.rustprefs.plain_prefs_string_free
import kotlinx.cinterop.*

@OptIn(ExperimentalForeignApi::class)
internal actual object RustCoreBridge {
    actual fun start(databasePath: String, token: String, configJson: String): String = memScoped {
        val result = plain_core_start(databasePath.cstr.ptr, token.cstr.ptr, configJson.cstr.ptr) ?: error("Rust core returned no response")
        try { result.toKString() } finally { plain_prefs_string_free(result) }
    }
    actual fun graphql(request: String, hostApi: Boolean): String = memScoped {
        val result = checkNotNull(plain_graphql(request.cstr.ptr, hostApi))
        try { result.toKString() } finally { plain_prefs_string_free(result) }
    }
    actual fun next(stream: String): String = memScoped {
        val pointer = checkNotNull(plain_events_next(stream.cstr.ptr))
        val result = try { JsonHelper.jsonDecode<JsonObject>(pointer.toKString()) } finally { plain_prefs_string_free(pointer) }
        result["error"]?.let { error(it.jsonPrimitive.content) }
        result.getValue("value").jsonPrimitive.content
    }
    actual fun send(action: String, message: String, bytes: ByteArray): String = memScoped {
        bytes.usePinned { pinned ->
            val pointer = checkNotNull(plain_events_send(action.cstr.ptr, message.cstr.ptr,
                if (bytes.isEmpty()) null else pinned.addressOf(0).reinterpret(), bytes.size.toULong()))
            try { pointer.toKString() } finally { plain_prefs_string_free(pointer) }
        }
    }
    actual fun stop() {
        val result = plain_http_stop() ?: return
        try { error(result.toKString()) } finally { plain_prefs_string_free(result) }
    }
}
