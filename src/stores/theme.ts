import { cloneDeep } from 'lodash-es'
import { themeSetting } from '~/settings/theme'

export const useThemeStore = defineStore('a4v-store-theme', () => {
  const { store: mode } = useColorMode()

  const isDark = computed(() => mode.value === 'dark')

  const setting = useStorage(
    'y-pro-user-info',
    cloneDeep(themeSetting),
    undefined,
    {
      serializer: {
        read: (val: string) => (val ? JSON.parse(val) : null),
        write: (val: any) => JSON.stringify(val),
      },
    },
  )

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
