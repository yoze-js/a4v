import type { DialogApi, LoadingBarApi, MessageApi, NotificationApi } from 'naive-ui'
import { createDiscreteApi } from 'naive-ui'

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
  const { setting } = useThemeSetting()

  const { theme, themeOverrides } = useNaiveTheme({
    themeOverrides: computed(() => ({
      common: setting.value?.themeColor,
    })),
    darkThemeOverrides: computed(() => ({
      common: setting.value?.darkThemeColor,
    })),
  })

  const { dialog, loadingBar, message, notification } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    {
      configProviderProps: {
        theme: theme.value,
        themeOverrides: themeOverrides.value,
      },
    },
  )

  return {
    dialog,
    loadingBar,
    message,
    notification,
  }
}
