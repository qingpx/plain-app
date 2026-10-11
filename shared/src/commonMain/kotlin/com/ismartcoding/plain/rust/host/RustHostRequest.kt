package com.ismartcoding.plain.rust.host

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.*

@Serializable
internal data class RustHostRequest(val id: Long, val method: String, val params: JsonObject)
