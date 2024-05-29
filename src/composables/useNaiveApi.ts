import type { ConfigProviderProps, DialogApi, LoadingBarApi, MessageApi, NotificationApi } from 'naive-ui'
import { createDiscreteApi, darkTheme, lightTheme } from 'naive-ui'

export interface UseNaiveApiReturn {
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
export function useNaiveApi(): UseNaiveApiReturn {
  const isDark = useDark()

  const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
    theme: unref(isDark) ? darkTheme : lightTheme,
  }))

  const { dialog, loadingBar, message, notification } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    { configProviderProps: configProviderPropsRef },
  )

  return {
    dialog,
    loadingBar,
    message,
    notification,
  }
}
