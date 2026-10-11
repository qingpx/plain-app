package com.ismartcoding.plain.rust.request

import kotlinx.serialization.Serializable

@Serializable
internal data class RecoverDeletionsRequest(val action: String = "recoverDeletions")
