package com.ismartcoding.plain.preferences

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * A user-settings command that is more than a field write — it de-duplicates a
 * recent search, trims a list to its limit, or rewrites a playlist entry.
 *
 * Rust keeps enforcing those rules; the App only names the command. The wire
 * shape mirrors Rust's `Action` enum: `{"action": "recordSearch", "value": …}`.
 */
@OptIn(kotlinx.serialization.ExperimentalSerializationApi::class)
@kotlinx.serialization.json.JsonClassDiscriminator("action")
@Serializable
internal sealed class UserAction {
    @Serializable @SerialName("recordSearch") data class RecordSearch(val value: String) : UserAction()
    @Serializable @SerialName("removeSearch") data class RemoveSearch(val value: String) : UserAction()
    @Serializable @SerialName("clearSearches") data object ClearSearches : UserAction()
    @Serializable @SerialName("recordSaveDirectory") data class RecordSaveDirectory(val value: String) : UserAction()
    @Serializable @SerialName("toggleNotificationApp") data class ToggleNotificationApp(val value: String) : UserAction()
    @Serializable @SerialName("setNotificationMode") data class SetNotificationMode(val value: String) : UserAction()
    @Serializable @SerialName("deleteVideos") data class DeleteVideos(val value: List<String>) : UserAction()
    @Serializable @SerialName("clearNotificationApps") data object ClearNotificationApps : UserAction()
}