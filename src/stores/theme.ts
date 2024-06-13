import { cloneDeep } from 'lodash-es'
import { themeSetting } from '~/settings/theme'

export const useThemeStore = defineStore('a4v-store-theme', () => {
  const { mode, isDark } = useThemeMode()

  const { setting } = useThemeSetting({ initialValue: cloneDeep(themeSetting) })

  function toggleMode(val: 'dark' | 'light' | 'auto') {
    setting.value.themeMode = val
    mode.value = val
  }

  return {
    mode,
    isDark,
    setting,
    toggleMode,
  }
})
