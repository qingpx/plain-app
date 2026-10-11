package com.ismartcoding.plain.features.feed

import com.ismartcoding.plain.rust.request.RustContentApi
import com.ismartcoding.plain.rust.content.gql
import kotlinx.serialization.json.jsonPrimitive
import kotlinx.serialization.json.contentOrNull

suspend fun FeedHelper.importAsync(content: String) { RustContentApi.mutate("importFeeds(content: ${gql(content)})") }
suspend fun FeedHelper.exportAsync(): String = RustContentApi.mutate("exportFeeds").getValue("exportFeeds").jsonPrimitive.content
