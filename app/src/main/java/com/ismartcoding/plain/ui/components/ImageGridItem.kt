package com.ismartcoding.plain.ui.components

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.combinedClickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.selection.toggleable
import androidx.compose.material3.Checkbox
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.ismartcoding.lib.helpers.CoroutinesHelper.coMain
import com.ismartcoding.lib.helpers.CoroutinesHelper.withIO
import com.ismartcoding.plain.data.DImage
import com.ismartcoding.plain.helpers.FormatHelper
import com.ismartcoding.plain.ui.base.dragselect.DragSelectState
import com.ismartcoding.plain.ui.components.mediaviewer.previewer.MediaPreviewerState
import com.ismartcoding.plain.ui.components.mediaviewer.previewer.TransformImageView
import com.ismartcoding.plain.ui.components.mediaviewer.previewer.rememberTransformItemState
import com.ismartcoding.plain.ui.models.CastViewModel
import com.ismartcoding.plain.ui.models.ImagesViewModel
import com.ismartcoding.plain.ui.models.MediaPreviewData
import com.ismartcoding.plain.ui.theme.darkMask
import com.ismartcoding.plain.ui.theme.lightMask

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun ImageGridItem(
    modifier: Modifier = Modifier,
    navController: NavHostController,
    viewModel: ImagesViewModel,
    castViewModel: CastViewModel,
    m: DImage,
    previewerState: MediaPreviewerState,
    dragSelectState: DragSelectState
) {
    val isSelected by remember { derivedStateOf { dragSelectState.isSelected(m.id) } }
    val inSelectionMode = dragSelectState.selectMode
    val selected = isSelected || viewModel.selectedItem.value?.id == m.id
    val context = LocalContext.current
    val itemState = rememberTransformItemState()
    Box(
        modifier = modifier
            .combinedClickable(
                onClick = {
                    if (castViewModel.castMode.value) {
                        castViewModel.cast(m.path)
                    } else if (inSelectionMode) {
                        dragSelectState.addSelected(m.id)
                    } else {
                        coMain {
                            withIO { MediaPreviewData.setDataAsync(context, itemState, viewModel.itemsFlow.value, m) }
                            previewerState.openTransform(
                                index = MediaPreviewData.items.indexOfFirst { it.id == m.id },
                                itemState = itemState,
                            )
                        }
                    }
                },
                onLongClick = {
                    if (inSelectionMode) {
                        return@combinedClickable
                    }
                    viewModel.selectedItem.value = m
                },
            )
            .then(
                if (!inSelectionMode) {
                    Modifier
                } else {
                    Modifier.toggleable(
                        value = selected,
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        onValueChange = { toggled ->
                            if (toggled) {
                                dragSelectState.addSelected(m.id)
                            } else {
                                dragSelectState.removeSelected(m.id)
                            }
                        }
                    )
                },
            ),
    ) {
        val imageModifier = Modifier
            .fillMaxSize()
            .align(Alignment.Center)
            .aspectRatio(1f)
        TransformImageView(
            modifier = imageModifier,
            path = m.path,
            key = m.id,
            itemState = itemState,
            previewerState = previewerState,
        )

        if (selected) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(MaterialTheme.colorScheme.lightMask())
                    .aspectRatio(1f)
            )
        }

        if (inSelectionMode) {
            Checkbox(
                modifier =
                Modifier
                    .align(Alignment.TopStart),
                checked = selected,
                onCheckedChange = {
                    dragSelectState.select(m.id)
                })
        }
        Box(
            modifier =
            Modifier
                .align(Alignment.BottomEnd)
                .background(MaterialTheme.colorScheme.darkMask()),
        ) {
            Text(
                modifier =
                Modifier
                    .padding(horizontal = 4.dp, vertical = 2.dp),
                text = FormatHelper.formatBytes(m.size),
                color = Color.White,
                style = MaterialTheme.typography.labelMedium.copy(fontWeight = FontWeight.Normal),
            )
        }
    }
}