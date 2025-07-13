package com.ismartcoding.plain.ui.page.chat.components

import android.content.Context
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.core.net.toUri
import androidx.navigation.NavHostController
import coil3.compose.AsyncImage
import com.ismartcoding.lib.extensions.dp2px
import com.ismartcoding.lib.extensions.formatDuration
import com.ismartcoding.lib.extensions.getFilenameExtension
import com.ismartcoding.lib.extensions.getFilenameFromPath
import com.ismartcoding.lib.extensions.getFinalPath
import com.ismartcoding.lib.extensions.isAudioFast
import com.ismartcoding.lib.extensions.isImageFast
import com.ismartcoding.lib.extensions.isPdfFile
import com.ismartcoding.lib.extensions.isTextFile
import com.ismartcoding.lib.extensions.isVideoFast
import com.ismartcoding.lib.helpers.CoroutinesHelper.coMain
import com.ismartcoding.lib.helpers.CoroutinesHelper.withIO
import com.ismartcoding.plain.R
import com.ismartcoding.plain.chat.DownloadQueue
import com.ismartcoding.plain.data.DPlaylistAudio
import com.ismartcoding.plain.db.DMessageFiles
import com.ismartcoding.plain.db.DPeer
import com.ismartcoding.plain.enums.TextFileType
import com.ismartcoding.plain.features.AudioPlayer
import com.ismartcoding.plain.features.Permissions
import com.ismartcoding.plain.helpers.AppHelper
import com.ismartcoding.plain.ui.base.HorizontalSpace
import com.ismartcoding.plain.ui.base.PlayerSlider
import com.ismartcoding.plain.ui.components.mediaviewer.previewer.MediaPreviewerState
import com.ismartcoding.plain.ui.components.mediaviewer.previewer.TransformImageView
import com.ismartcoding.plain.ui.components.mediaviewer.previewer.rememberTransformItemState
import com.ismartcoding.plain.ui.models.AudioPlaylistViewModel
import com.ismartcoding.plain.ui.models.MediaPreviewData
import com.ismartcoding.plain.ui.models.VChat
import com.ismartcoding.plain.ui.nav.navigateOtherFile
import com.ismartcoding.plain.ui.nav.navigatePdf
import com.ismartcoding.plain.ui.nav.navigateTextFile
import com.ismartcoding.plain.ui.page.audio.AudioPlayerPage
import com.ismartcoding.plain.ui.theme.cardBackgroundNormal
import com.ismartcoding.plain.ui.theme.listItemTitle
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import java.io.File


@Composable
fun ChatFiles(
    context: Context,
    items: List<VChat>,
    navController: NavHostController,
    m: VChat,
    peer: DPeer?,
    audioPlaylistVM: AudioPlaylistViewModel,
    previewerState: MediaPreviewerState,
) {
    val fileItems = (m.value as DMessageFiles).items
    val keyboardController = LocalSoftwareKeyboardController.current
    val scope = rememberCoroutineScope()

    val currentPlayingPath = audioPlaylistVM.selectedPath
    var showAudioPlayer by remember { mutableStateOf(false) }
    val downloadProgressMap by DownloadQueue.downloadProgress.collectAsState(mapOf())

    LaunchedEffect(currentPlayingPath.value) {
        if (showAudioPlayer) {
            showAudioPlayer = currentPlayingPath.value.isNotEmpty()
        }
    }

    Column(
        Modifier
            .padding(horizontal = 16.dp)
            .clip(RoundedCornerShape(12.dp))
            .background(MaterialTheme.colorScheme.cardBackgroundNormal)
    ) {
        fileItems.forEachIndexed { index, item ->
            val itemState = rememberTransformItemState()
            val previewPath = item.getPreviewPath(context, peer)
            val path = item.uri.getFinalPath(context)
            val fileName = item.fileName.ifEmpty { path.getFilenameFromPath() }
            val isAudio = fileName.isAudioFast()
            val isCurrentlyPlaying = currentPlayingPath.value == path && isAudio
            val isPlaying by AudioPlayer.isPlayingFlow.collectAsState()

            val downloadTask = downloadProgressMap[item.id]
            val isDownloading = downloadTask?.isDownloading() == true
            val downloadProgress = downloadTask?.let {
                if (it.messageFile.size > 0) it.downloadedSize.toFloat() / it.messageFile.size.toFloat() else 0f
            } ?: 0f

            // Auto-start download for remote files
            LaunchedEffect(item.uri) {
                if (item.isRemoteFile() && downloadTask == null && peer != null) {
                    DownloadQueue.addDownloadTask(item, peer, m.id)
                }
            }

            var progress by remember { mutableFloatStateOf(0f) }
            val duration by remember { mutableFloatStateOf(item.duration.toFloat()) }

            var progressUpdateJob: Job? = null

            LaunchedEffect(isCurrentlyPlaying, isPlaying) {
                progressUpdateJob?.cancel()

                if (isCurrentlyPlaying && isPlaying) {
                    progressUpdateJob = scope.launch {
                        while (isActive) {
                            progress = AudioPlayer.playerProgress / 1000f
                            delay(500)
                        }
                    }
                }
            }

            Column {
                Box(
                    modifier =
                        Modifier
                            .fillMaxWidth()
                            .clickable {
                                if (isDownloading) {
                                    // If currently downloading, do nothing
                                    return@clickable
                                }
                                if (fileName.isImageFast() || fileName.isVideoFast()) {
                                    coMain {
                                        keyboardController?.hide()
                                        withIO { MediaPreviewData.setDataAsync(context, itemState, items.reversed(), item) }
                                        previewerState.openTransform(
                                            index = MediaPreviewData.items.indexOfFirst { it.id == item.id },
                                            itemState = itemState,
                                        )
                                    }
                                } else if (isAudio) {
                                    Permissions.checkNotification(context, R.string.audio_notification_prompt) {
                                        AudioPlayer.play(context, DPlaylistAudio.fromPath(context, path))
                                    }
                                } else if (fileName.isTextFile()) {
                                    navController.navigateTextFile(path, mediaId = "", type = TextFileType.CHAT)
                                } else if (fileName.isPdfFile()) {
                                    navController.navigatePdf(File(path).toUri())
                                } else {
                                    navController.navigateOtherFile(path)
                                }
                            },
                ) {
                    Row(
                        modifier =
                            Modifier
                                .fillMaxWidth()
                                .padding(top = if (index == 0) 16.dp else 6.dp, bottom = 16.dp, start = 16.dp, end = 16.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                modifier =
                                    Modifier
                                        .fillMaxWidth()
                                        .padding(bottom = 8.dp, end = 8.dp),
                                text = fileName,
                                style = MaterialTheme.typography.listItemTitle(),
                                color = if (isCurrentlyPlaying) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurface
                            )

                            // Display summary for text files if available
                            if (fileName.isTextFile() && item.summary.isNotEmpty()) {
                                Text(
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .padding(top = 4.dp, end = 8.dp),
                                    text = item.summary,
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                                    maxLines = 2
                                )
                            }
                        }

                        Box {
                            if (fileName.isImageFast() || fileName.isVideoFast()) {
                                TransformImageView(
                                    modifier = Modifier
                                        .size(48.dp)
                                        .clip(RoundedCornerShape(4.dp)),
                                    path = previewPath,
                                    key = item.id,
                                    itemState = itemState,
                                    previewerState = previewerState,
                                    widthPx = context.dp2px(48)
                                )
                            } else {
                                AsyncImage(
                                    model = AppHelper.getFileIconPath(fileName.getFilenameExtension()),
                                    modifier = Modifier
                                        .size(48.dp),
                                    alignment = Alignment.Center,
                                    contentDescription = fileName,
                                )
                            }

                            if (isDownloading) {
                                DownloadProgressOverlay(
                                    modifier = Modifier
                                        .size(48.dp),
                                    downloadProgress = downloadProgress,
                                    status = downloadTask.status,
                                    onPause = { DownloadQueue.pauseDownload(item.id) },
                                    onResume = { DownloadQueue.resumeDownload(item.id) },
                                    onCancel = { DownloadQueue.removeDownload(item.id) },
                                    size = 32.dp
                                )
                            }
                        }
                    }
                }

                if (isCurrentlyPlaying) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 8.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(
                            modifier = Modifier.weight(1f)
                        ) {
                            PlayerSlider(
                                progress = if (duration == 0f) 0f else progress / duration,
                                bufferedProgress = 0f,
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .height(20.dp),
                                onProgressChange = { newProgress ->
                                    progress = newProgress * duration
                                },
                                onValueChangeFinished = {
                                    AudioPlayer.seekTo(progress.toLong())
                                },
                                trackColor = MaterialTheme.colorScheme.surfaceVariant,
                                progressColor = MaterialTheme.colorScheme.primary,
                                thumbColor = MaterialTheme.colorScheme.primary
                            )

                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween
                            ) {
                                Text(
                                    text = progress.toLong().formatDuration(),
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )

                                Text(
                                    text = duration.toLong().formatDuration(),
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                        }

                        HorizontalSpace(16.dp)

                        if (isCurrentlyPlaying) {
                            Row {
                                if (isPlaying) {
                                    IconButton(
                                        onClick = {
                                            AudioPlayer.pause()
                                        },
                                        modifier = Modifier
                                            .size(40.dp)
                                            .shadow(2.dp, CircleShape)
                                            .clip(CircleShape)
                                            .background(MaterialTheme.colorScheme.primaryContainer)
                                    ) {
                                        Icon(
                                            painter = painterResource(id = R.drawable.pause),
                                            contentDescription = stringResource(R.string.pause),
                                            tint = MaterialTheme.colorScheme.onPrimaryContainer,
                                            modifier = Modifier.size(24.dp)
                                        )
                                    }
                                } else {
                                    IconButton(
                                        onClick = {
                                            AudioPlayer.play()
                                        },
                                        modifier = Modifier
                                            .size(40.dp)
                                            .shadow(2.dp, CircleShape)
                                            .clip(CircleShape)
                                            .background(MaterialTheme.colorScheme.primary)
                                    ) {
                                        Icon(
                                            painter = painterResource(id = R.drawable.play_arrow),
                                            contentDescription = stringResource(R.string.play),
                                            tint = MaterialTheme.colorScheme.onPrimary,
                                            modifier = Modifier.size(24.dp)
                                        )
                                    }
                                }
                                HorizontalSpace(8.dp)
                                IconButton(
                                    onClick = { showAudioPlayer = true },
                                    modifier = Modifier
                                        .size(36.dp)
                                        .clip(CircleShape)
                                ) {
                                    Icon(
                                        painter = painterResource(id = R.drawable.music2),
                                        contentDescription = "Full player",
                                        tint = MaterialTheme.colorScheme.primary
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (showAudioPlayer) {
        AudioPlayerPage(
            audioPlaylistVM,
            onDismissRequest = { showAudioPlayer = false }
        )
    }
}
