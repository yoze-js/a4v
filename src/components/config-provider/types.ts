import type { ConfigProviderProps as NConfigProviderProps } from 'naive-ui'

export interface ConfigProviderProps extends /* @vue-ignore */ NConfigProviderProps {
  /**
   * 是否使用全局样式组件
   */
  globalStyle?: boolean
}
