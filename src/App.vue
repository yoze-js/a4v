<script setup lang="ts">
import { cloneDeep } from 'lodash-es'
import { themeSetting } from '~/settings/theme'

const { setting } = useThemeSetting({ initialValue: cloneDeep(themeSetting) })
const { theme, themeOverrides } = useNaiveTheme({
  themeOverrides: computed(() => ({
    common: setting.value?.themeColor,
  })),
  darkThemeOverrides: computed(() => ({
    common: setting.value?.darkThemeColor,
  })),
})
</script>

<template>
  <YConfigProvider
    :theme
    :theme-overrides
  >
    <RouterView />
  </YConfigProvider>
</template>
