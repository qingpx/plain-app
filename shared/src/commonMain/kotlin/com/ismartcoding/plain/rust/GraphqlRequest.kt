package com.ismartcoding.plain.rust

import kotlinx.serialization.Serializable

@Serializable
data class GraphqlRequest(val query: String, val variables: Map<String, kotlinx.serialization.json.JsonElement> = emptyMap(), val operationName: String? = null)
