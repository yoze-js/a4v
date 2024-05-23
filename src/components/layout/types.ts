import type { CSSProperties } from 'vue'

export interface LayoutProps {
  /**
   * 折叠侧边栏
   */
  collapsed?: boolean
  /**
   * 侧边栏折叠宽度
   */
  collapsedWidth?: number | string
  /**
   * 内容类名
   */
  contentClass?: any
  /**
   * 内容样式
   */
  contentStyle?: CSSProperties
  /**
   * 底栏类名
   */
  footerClass?: any
  /**
   * 底栏高度
   */
  footerHeight?: number | string
  /**
   * 底栏样式
   */
  footerStyle?: CSSProperties
  /**
   * 顶栏类名
   */
  headerClass?: any
  /**
   * 顶栏高度
   */
  headerHeight?: number | string
  /**
   * 顶栏样式
   */
  headerStyle?: CSSProperties
  /**
   * 布局模式
   */
  mode?: 'horizontal' | 'vertical'
  /**
   * 显示底栏
   */
  showFooter?: boolean
  /**
   * 显示顶栏
   */
  showHeader?: boolean
  /**
   * 显示侧边栏
   */
  showSider?: boolean
  /**
   * 侧边栏类名
   */
  siderClass?: any
  /**
   * 侧边栏样式
   */
  siderStyle?: CSSProperties
  /**
   * 侧边栏宽度
   */
  siderWidth?: number | string
}
