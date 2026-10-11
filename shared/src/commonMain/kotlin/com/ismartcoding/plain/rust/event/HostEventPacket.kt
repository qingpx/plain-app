package com.ismartcoding.plain.rust.event

import kotlinx.serialization.Serializable

@Serializable
internal data class HostEventPacket(val type: String, val payload: String)
