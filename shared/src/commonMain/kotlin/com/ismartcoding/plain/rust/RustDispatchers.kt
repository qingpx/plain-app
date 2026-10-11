package com.ismartcoding.plain.rust

import kotlinx.coroutines.CoroutineDispatcher

internal expect object RustDispatchers {
    val requests: CoroutineDispatcher
    val events: CoroutineDispatcher
}
