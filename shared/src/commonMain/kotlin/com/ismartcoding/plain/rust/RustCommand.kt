package com.ismartcoding.plain.rust

import com.ismartcoding.plain.api.ContentApiSession
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

sealed interface RustCommand {
    data class Graphql(val document: String, val variables: Map<String, JsonElement> = emptyMap(), val session: ContentApiSession? = null, val longRunning: Boolean = false, val operationName: String? = null, val hostApi: Boolean = false) : RustCommand
}
