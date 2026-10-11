package com.ismartcoding.plain.platform

import com.ismartcoding.plain.preferences.UserPrefs

fun setDesktopAccessEnabled(enabled: Boolean) {
    UserPrefs.desktopAccess.value = enabled
}