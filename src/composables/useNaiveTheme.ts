import type { GlobalThemeOverrides } from 'naive-ui'
import { commonDark, darkTheme } from 'naive-ui'
import type { MaybeRefOrGetter } from 'vue'
import type { UseColorModeOptions } from '@vueuse/core'

export type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
export type ColorScene = '' | 'Suppl' | 'Hover' | 'Pressed'
export interface ColorAction {
  scene: ColorScene
  handler: (color: string) => string
}

export interface UseNaiveThemeOptions {
  /**
   * 本地存储 key
   *
   * 传递 null 关闭本地存储
   *
   * @default 'a4v-theme-setting-scheme'
   */
  storageKey?: string | null
  /**
   * 主题模式
   */
  themeMode?: UseColorModeOptions['initialValue']
  /**
   * Naive UI 主题覆盖
   */
  themeOverrides?: MaybeRefOrGetter<GlobalThemeOverrides>
  /**
   * Naive UI 暗黑主题覆盖
   */
  darkThemeOverrides?: MaybeRefOrGetter<GlobalThemeOverrides>
}

export interface UseNaiveThemeReturn {
  /**
   * Naive UI 主题
   */
  theme: Ref<typeof darkTheme | null>
  /**
   * Naive UI 主题覆盖
   */
  themeOverrides: Ref<GlobalThemeOverrides>
}

/**
 * Naive UI 主题设置
 * @param options 参数
 */
export function useNaiveTheme(options: UseNaiveThemeOptions = {}): UseNaiveThemeReturn {
  const {
    themeMode,
    themeOverrides: initialThemeOverrides,
    darkThemeOverrides: initialDarkThemeOverrides,
  } = options

  const mode = useColorMode({ initialValue: themeMode })
  const isDark = computed(() => {
    return mode.value === 'dark'
  })
  const theme = computed(() => {
    return isDark.value ? darkTheme : null
  })

  const currentThemeOverrides = computed(() => {
    return isDark.value ? toValue(initialDarkThemeOverrides) : toValue(initialThemeOverrides)
  })
  const mergeThemeOverrides = computed(() => {
    return {
      ...currentThemeOverrides.value,
      common: currentThemeOverrides.value?.common,
    }
  })
  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    const commonColor = getCommonColor(mergeThemeOverrides.value.common, isDark.value)

    return {
      ...mergeThemeOverrides.value,
      common: {
        ...mergeThemeOverrides.value.common,
        ...commonColor,
      },
    }
  })

  function getGenerateColors(color: string, isDark: boolean): string[] {
    return isDark
      ? generateColorPalettes(color, true, commonDark.bodyColor)
      : generateColorPalettes(color)
  }

  function getCommonColor(commonColor: GlobalThemeOverrides['common'], isDark: boolean) {
    const result: any = {}
    const keys = Object.keys(commonColor!) as ColorType[]
    const colorActions: ColorAction[] = [
      {
        scene: '',
        handler: color => getGenerateColors(color, isDark)[5],
      },
      {
        scene: 'Hover',
        handler: color => getGenerateColors(color, isDark)[4],
      },
      {
        scene: 'Suppl',
        handler: color => getGenerateColors(color, isDark)[4],
      },
      {
        scene: 'Pressed',
        handler: color => getGenerateColors(color, isDark)[6],
      },
    ]
    keys.forEach((key) => {
      colorActions.forEach((action) => {
        const color = action.handler((commonColor as any)[key])
        const colorKey = key + action.scene
        result[colorKey] = color
      })
    })

    return result
  }

  return {
    theme,
    themeOverrides,
  }
}
