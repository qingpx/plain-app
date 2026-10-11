package com.ismartcoding.plain.events

import com.ismartcoding.plain.chat.download.DownloadTask
import com.ismartcoding.plain.enums.WebSettingsFeature

class HStartScreenMirrorEvent(val audio: Boolean) : HEvent()

class HRequestScreenMirrorAudioEvent : HEvent()

class HOpenAccessibilitySettingsEvent : HEvent()

class HOpenWebSettingsEvent(val feature: WebSettingsFeature? = null) : HEvent()

data class HDownloadTaskDoneEvent(val downloadTask: DownloadTask) : HEvent()
