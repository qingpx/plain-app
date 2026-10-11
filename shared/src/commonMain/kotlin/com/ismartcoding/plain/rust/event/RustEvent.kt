package com.ismartcoding.plain.rust.event

import kotlinx.serialization.Serializable

@Serializable
data class RustEvent(
    val type: String,
    val payload: String,
    val reconcile: Boolean = false,
)
