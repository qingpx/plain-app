package com.ismartcoding.plain.rust.bridge

import kotlinx.coroutines.CoroutineDispatcher

internal expect object RustDispatchers {
    val requests: CoroutineDispatcher
    val events: CoroutineDispatcher
}
