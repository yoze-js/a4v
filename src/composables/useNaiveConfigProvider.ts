import type { UseColorModeOptions } from '@vueuse/core'
import { merge } from 'lodash-es'
import type { ConfigProviderProps, GlobalThemeOverrides } from 'naive-ui'
import { commonDark, darkTheme, dateZhCN, zhCN } from 'naive-ui'
import type { MaybeRefOrGetter } from 'vue'

export type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
export type ColorScene = '' | 'Suppl' | 'Hover' | 'Pressed'
export interface ColorAction {
  scene: ColorScene
  handler: (color: string) => string
}

export interface UseNaiveConfigProviderOptions {
  /**
   * 是否不存在 DOM 包裹
   */
  abstract?: ConfigProviderProps['abstract']
  /**
   * 屏幕响应式断点，对 n-grid 生效。这个属性不是响应式的，你需要在组件第一次挂载时就设定好
   */
  breakpoints?: ConfigProviderProps['breakpoints']
  /**
   * 内部所有组件的类的前缀，仅首次设定会生效
   */
  clsPrefix?: ConfigProviderProps['clsPrefix']
  /**
   * 对后代组件生效的日期语言对象，为 null 时会使用默认 dateEnUS，为 undefined 时会继承上级 n-config-provider
   */
  dateLocale?: MaybeRefOrGetter<ConfigProviderProps['dateLocale']>
  /**
   * 是否禁用 inline css 主题变量，如果你不会频繁调整主题变量，并且需要 SSR 或者想让 devtools 看起来更干净，可以打开这个选项。注意，这个属性不是响应式的
   */
  inlineThemeDisabled?: ConfigProviderProps['inlineThemeDisabled']
  /**
   * 公式组件需要的 katex 对象
   */
  katex?: ConfigProviderProps['katex']
  /**
   * 对后代组件生效的语言对象，为 null 时会使用默认 enUS，为 undefined 时会继承上级 n-config-provider
   */
  locale?: MaybeRefOrGetter<ConfigProviderProps['locale']>
  /**
   * n-config-provider 内部组件被卸载于其他位置的 DOM 的类名
   */
  namespace?: ConfigProviderProps['namespace']
  /**
   * 是否禁用默认样式，如果你禁用了它，便可以完全控制全局样式。你也可以使用 n-global-style 去挂载全局样式（推荐，样式是响应式的）
   */
  preflightStyleDisabled?: ConfigProviderProps['preflightStyleDisabled']
  /**
   * n-config-provider 被渲染成的元素
   */
  tag?: ConfigProviderProps['tag']
  /**
   * 是否使用全局样式组件
   */
  globalStyle?: boolean
  /**
   * 主题模式
   */
  themeMode?: UseColorModeOptions['initialValue']
  /**
   * Naive UI 主题覆盖
   */
  themeOverrides?: MaybeRefOrGetter<GlobalThemeOverrides | null>
  /**
   * Naive UI 明亮主题覆盖
   */
  lightThemeOverrides?: MaybeRefOrGetter<GlobalThemeOverrides | null>
  /**
   * Naive UI 暗黑主题覆盖
   */
  darkThemeOverrides?: MaybeRefOrGetter<GlobalThemeOverrides | null>
}

export interface UseNaiveConfigProviderReturn extends ConfigProviderProps {
  /**
   * 是否使用全局样式组件
   */
  globalStyle?: boolean
}

export function useNaiveConfigProvider(options: UseNaiveConfigProviderOptions = {}): UseNaiveConfigProviderReturn {
  const {
    dateLocale = dateZhCN,
    locale = zhCN,
    themeMode,
    themeOverrides: initialThemeOverrides = {},
    lightThemeOverrides: initialLightThemeOverrides = {},
    darkThemeOverrides: initialDarkThemeOverrides = {},
    ...opts
  } = options

  const { isDark } = storeToRefs(useThemeStore())
  const { toggleMode } = useThemeStore()

  if (themeMode)
    toggleMode(toValue(themeMode))

  const theme = computed(() => isDark.value ? darkTheme : null)

  const currentThemeOverrides = computed(() => {
    const themeOverrides = isDark.value ? toValue(initialDarkThemeOverrides) : toValue(initialLightThemeOverrides)
    return merge(themeOverrides, toValue(initialThemeOverrides))
  })
  const themeOverrides = computed(() => {
    if (!currentThemeOverrides.value)
      return {}

    const commonColor = getCommonColor(currentThemeOverrides.value.common, isDark.value)
    return {
      ...currentThemeOverrides.value,
      common: {
        ...currentThemeOverrides.value.common,
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
        handler: color => color,
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
      if (key.includes('Color')) {
        colorActions.forEach((action) => {
          const color = action.handler((commonColor as any)[key])
          const colorKey = key + action.scene
          result[colorKey] = color
        })
      }
    })

    return result
  }

  return reactive<any>({
    dateLocale,
    locale,
    theme,
    themeOverrides,
    ...opts,
  })
}
