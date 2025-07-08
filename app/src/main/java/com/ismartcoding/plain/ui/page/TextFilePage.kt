package com.ismartcoding.plain.ui.page

import androidx.activity.compose.BackHandler
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.res.stringResource
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import com.ismartcoding.lib.extensions.getFilenameFromPath
import com.ismartcoding.lib.extensions.pathToAceMode
import com.ismartcoding.lib.extensions.scanFileByConnection
import com.ismartcoding.lib.helpers.CoroutinesHelper.withIO
import com.ismartcoding.plain.R
import com.ismartcoding.plain.enums.DarkTheme
import com.ismartcoding.plain.enums.TextFileType
import com.ismartcoding.plain.helpers.AppLogHelper
import com.ismartcoding.plain.helpers.ShareHelper
import com.ismartcoding.plain.preferences.LocalDarkTheme
import com.ismartcoding.plain.ui.base.AceEditor
import com.ismartcoding.plain.ui.base.ActionButtonMore
import com.ismartcoding.plain.ui.base.NavigationBackIcon
import com.ismartcoding.plain.ui.base.NavigationCloseIcon
import com.ismartcoding.plain.ui.base.NoDataColumn
import com.ismartcoding.plain.ui.base.PIconButton
import com.ismartcoding.plain.ui.base.PScaffold
import com.ismartcoding.plain.ui.base.PTopAppBar
import com.ismartcoding.plain.ui.components.EditorData
import com.ismartcoding.plain.ui.helpers.DialogHelper
import com.ismartcoding.plain.ui.models.TextFileViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import java.io.File

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TextFilePage(
    navController: NavHostController,
    path: String,
    title: String,
    mediaId: String = "",
    type: String = TextFileType.DEFAULT.name,
    textFileVM: TextFileViewModel = viewModel()
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val darkTheme = LocalDarkTheme.current
    val isDarkTheme = DarkTheme.isDarkTheme(darkTheme)
    val keyboardController = LocalSoftwareKeyboardController.current
    val focusManager = LocalFocusManager.current
    
    var isSaving by remember { mutableStateOf(false) }
    val rotation by animateFloatAsState(
        targetValue = if (isSaving) 360f else 0f,
        animationSpec = tween(durationMillis = 600),
        label = "save_rotation"
    )

    LaunchedEffect(Unit) {
        scope.launch(Dispatchers.IO) {
            textFileVM.loadConfigAsync(context)
            textFileVM.loadFileAsync(context, path, mediaId)
            textFileVM.isDataLoading.value = false
        }
    }

    if (textFileVM.showMoreActions.value) {
        ViewTextFileBottomSheet(textFileVM, path, textFileVM.file.value, onDeleted = {
            scope.launch {
                navController.popBackStack()
            }
        })
    }

    BackHandler(enabled = !textFileVM.readOnly.value) {
        textFileVM.exitEditMode()
    }

    PScaffold(
        topBar = {
            PTopAppBar(
                title = title.ifEmpty { path.getFilenameFromPath() },
                navController = navController,
                navigationIcon = {
                    if (textFileVM.readOnly.value) {
                        NavigationBackIcon {
                            navController.popBackStack()
                        }
                    } else {
                        NavigationCloseIcon {
                            textFileVM.exitEditMode()
                        }
                    }
                },
                actions = {
                    if (!textFileVM.isEditorReady.value) {
                        return@PTopAppBar
                    }
                    if (textFileVM.readOnly.value) {
                        if (type != TextFileType.APP_LOG.name && !textFileVM.isExternalFile.value) {
                            PIconButton(
                                icon = R.drawable.square_pen,
                                contentDescription = stringResource(R.string.edit),
                                tint = MaterialTheme.colorScheme.onSurface,
                            ) {
                                textFileVM.enterEditMode()
                            }
                        }
                    } else {
                        PIconButton(
                            icon = R.drawable.save,
                            contentDescription = stringResource(R.string.save),
                            tint = if (isSaving) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurface,
                            modifier = Modifier.rotate(rotation),
                        ) {
                            scope.launch {
                                // Prevent saving external files (content URIs)
                                if (textFileVM.isExternalFile.value) {
                                    DialogHelper.showMessage(R.string.not_supported_error)
                                    return@launch
                                }
                                
                                // Close keyboard and clear focus
                                keyboardController?.hide()
                                focusManager.clearFocus()
                                
                                // Start saving animation
                                isSaving = true
                                
                                DialogHelper.showLoading()
                                withIO { File(path).writeText(textFileVM.content.value) }
                                textFileVM.oldContent.value = textFileVM.content.value
                                context.scanFileByConnection(path)
                                DialogHelper.hideLoading()
                                
                                // Wait for animation to complete
                                delay(600)
                                isSaving = false
                            }
                        }
                    }
                    if (setOf(TextFileType.APP_LOG.name, TextFileType.CHAT.name).contains(type)) {
                        PIconButton(
                            icon = R.drawable.wrap_text,
                            contentDescription = stringResource(R.string.wrap_content),
                            tint = MaterialTheme.colorScheme.onSurface,
                        ) {
                            textFileVM.toggleWrapContent(context)
                        }
                        PIconButton(
                            icon = R.drawable.share_2,
                            contentDescription = stringResource(R.string.share),
                            tint = MaterialTheme.colorScheme.onSurface,
                        ) {
                            if (type == TextFileType.APP_LOG.name) {
                                AppLogHelper.export(context)
                            } else if (type == TextFileType.CHAT.name) {
                                ShareHelper.shareFile(context, File(path))
                            }
                        }
                    } else {
                        ActionButtonMore {
                            textFileVM.showMoreActions.value = true
                        }
                    }
                },
            )
        },
        content = { paddingValues ->
            Column(modifier = Modifier.padding(top = paddingValues.calculateTopPadding())) {
                if (textFileVM.isDataLoading.value || !textFileVM.isEditorReady.value) {
                    NoDataColumn(loading = true)
                }
                if (textFileVM.isDataLoading.value) {
                    return@PScaffold
                }
                AceEditor(
                    textFileVM, scope,
                    EditorData(
                        language = path.pathToAceMode(),
                        wrapContent = textFileVM.wrapContent.value,
                        isDarkTheme = isDarkTheme,
                        readOnly = textFileVM.readOnly.value,
                        gotoEnd = type == TextFileType.APP_LOG.name,
                        content = textFileVM.content.value
                    )
                )
            }
        },
    )
}

