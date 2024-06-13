import { useStorage } from '@vueuse/core'
import { type MaybeRefOrGetter, type Ref, toValue } from 'vue'

/**
 * 主题模式
 */
export type themeMode = 'auto' | 'dark' | 'light'

export interface useThemeOptions {
  /**
   * 主题设置默认值
   */
  initialValue?: MaybeRefOrGetter<any>
  /**
   * 本地存储 key
   *
   * 传递 null 关闭本地存储
   *
   * @default 'a4v-theme-setting-scheme'
   */
  storageKey?: string | null
}

export interface useThemeReturn {
  /**
   * 主题设置
   */
  setting: Ref<any>
}

/**
 * 存放在 localStorage 的主题设置
 * @param options 参数
 */
export function useThemeSetting(options: useThemeOptions = {}): useThemeReturn {
  const { initialValue = null, storageKey = 'a4v-theme-setting-scheme' } = options

  const setting = storageKey === null
    ? toValue(initialValue)
    : useStorage(storageKey, toValue(initialValue), undefined, {
      serializer: {
        read: (v: any) => v ? JSON.parse(v) : null,
        write: (v: any) => JSON.stringify(v),
      },
    })

  return {
    setting,
  }
}
