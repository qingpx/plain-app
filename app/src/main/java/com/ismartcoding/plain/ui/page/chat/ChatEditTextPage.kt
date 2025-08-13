package com.ismartcoding.plain.ui.page.chat

import androidx.compose.foundation.border
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.ismartcoding.lib.channel.sendEvent
import com.ismartcoding.lib.helpers.CoroutinesHelper.withIO
import com.ismartcoding.lib.helpers.JsonHelper
import com.ismartcoding.plain.R
import com.ismartcoding.plain.db.AppDatabase
import com.ismartcoding.plain.db.ChatItemDataUpdate
import com.ismartcoding.plain.db.DMessageContent
import com.ismartcoding.plain.db.DMessageText
import com.ismartcoding.plain.db.DMessageType
import com.ismartcoding.plain.features.ChatHelper
import com.ismartcoding.plain.ui.base.PIconButton
import com.ismartcoding.plain.ui.base.PScaffold
import com.ismartcoding.plain.ui.base.PTopAppBar
import com.ismartcoding.plain.web.models.toModel
import com.ismartcoding.plain.events.EventType
import com.ismartcoding.plain.events.WebSocketEvent
import com.ismartcoding.plain.ui.models.ChatViewModel
import com.ismartcoding.plain.features.LinkPreviewHelper
import androidx.compose.ui.platform.LocalContext
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ChatEditTextPage(
    navController: NavHostController,
    id: String,
    content: String,
    chatVM: ChatViewModel,
) {
    val scope = rememberCoroutineScope()
    var inputValue by remember { mutableStateOf(content) }
    val focusManager = LocalFocusManager.current
    val context = LocalContext.current

    PScaffold(
        topBar = {
            PTopAppBar(
                navController = navController,
                title = stringResource(id = R.string.edit_text),
                actions = {
                    PIconButton(
                        icon = R.drawable.save,
                        contentDescription = stringResource(R.string.save),
                        tint = MaterialTheme.colorScheme.onSurface,
                    ) {
                        if (inputValue.isNotEmpty()) {
                            scope.launch {
                                val originalChat = withIO { AppDatabase.instance.chatDao().getById(id) } ?: return@launch
                                val originalMessageText = originalChat?.content?.value as? DMessageText
                                val originalLinkPreviews = originalMessageText?.linkPreviews ?: emptyList()

                                // Extract URLs from the new text
                                val newUrls = LinkPreviewHelper.extractUrls(inputValue)
                                val originalUrls = originalLinkPreviews.map { it.url }

                                // Check if links have changed
                                val linksChanged = newUrls.toSet() != originalUrls.toSet()

                                val updatedLinkPreviews = if (linksChanged) {
                                    // If links changed, clean up old preview images that are no longer used
                                    val removedUrls = originalUrls - newUrls.toSet()
                                    val removedPreviews = originalLinkPreviews.filter { it.url in removedUrls }
                                    removedPreviews.forEach { preview ->
                                        preview.imageLocalPath?.let { path ->
                                            LinkPreviewHelper.deletePreviewImage(context, path)
                                        }
                                    }

                                    // Keep existing previews for URLs that are still present
                                    originalLinkPreviews.filter { it.url in newUrls }
                                } else {
                                    originalLinkPreviews
                                }.toMutableList()

                                // If links changed, fetch new link previews for added URLs
                                if (linksChanged) {
                                    val addedUrls = newUrls - originalUrls.toSet()
                                    if (addedUrls.isNotEmpty()) {
                                        val linkPreviews = withIO { ChatHelper.fetchLinkPreviewsAsync(context, addedUrls) }
                                        updatedLinkPreviews.addAll(linkPreviews.filter { !it.hasError })
                                    }
                                }

                                val updatedMessageText = DMessageText(inputValue, updatedLinkPreviews)
                                val content = DMessageContent(DMessageType.TEXT.value, updatedMessageText)
                                withIO { AppDatabase.instance.chatDao().updateData(ChatItemDataUpdate(id, content)) }
                                originalChat.content = content
                                chatVM.update(originalChat)
                                val m = originalChat.toModel()
                                m.data = m.getContentData()
                                sendEvent(
                                    WebSocketEvent(
                                        EventType.MESSAGE_UPDATED,
                                        JsonHelper.jsonEncode(
                                            listOf(m)
                                        ),
                                    ),
                                )
                                focusManager.clearFocus()
                                navController.navigateUp()
                            }
                        }
                    }
                })
        },
        content = { paddingValues ->
            OutlinedTextField(
                value = inputValue,
                onValueChange = { inputValue = it },
                modifier =
                    Modifier
                        .padding(start = 16.dp, end = 16.dp, top = paddingValues.calculateTopPadding())
                        .imePadding()
                        .border(
                            width = 1.dp,
                            color = MaterialTheme.colorScheme.primary,
                            shape = RoundedCornerShape(8.dp),
                        )
                        .fillMaxWidth(),
                keyboardOptions = KeyboardOptions.Default,
                shape = RoundedCornerShape(8.dp),
            )
        },
    )
}
