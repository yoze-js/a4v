import type { ConfigProviderProps, DialogApi, LoadingBarApi, MessageApi, NotificationApi } from 'naive-ui'
import { createDiscreteApi } from 'naive-ui'

export interface UseNaiveDiscreteApiOptions extends ConfigProviderProps {}

export interface UseNaiveDiscreteApiReturn {
  /**
   * Naive UI 对话框 API
   */
  dialog: DialogApi
  /**
   * Naive UI 加载条 API
   */
  loadingBar: LoadingBarApi
  /**
   * Naive UI 信息 API
   */
  message: MessageApi
  /**
   * Naive UI 通知 API
   */
  notification: NotificationApi
}

/**
 * Naive UI 脱离上下文的 API
 */
export function useNaiveDiscreteApi(options: UseNaiveDiscreteApiOptions = {}): UseNaiveDiscreteApiReturn {
  const { setting } = storeToRefs(useThemeStore())

  const configProviderProps = useNaiveConfigProvider({
    lightThemeOverrides: computed(() => ({
      common: setting.value?.lightThemeColor,
    })),
    darkThemeOverrides: computed(() => ({
      common: setting.value?.darkThemeColor,
    })),
    ...options,
  })

  const { dialog, loadingBar, message, notification } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    {
      configProviderProps,
    },
  )

  return {
    dialog,
    loadingBar,
    message,
    notification,
  }
}
