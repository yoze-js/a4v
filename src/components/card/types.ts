import type { CSSProperties, VNode } from 'vue'

export interface CardProps {
  /**
   * 是否显示操作按钮
   */
  action?: boolean
  /**
   * 是否显示卡片边框
   */
  bordered?: boolean
  /**
   * 是否允许关闭
   */
  closable?: boolean
  /**
   * 卡片内容区域的类名
   */
  contentClass?: string
  /**
   * 卡片内容区域的样式
   */
  contentStyle?: string | CSSProperties
  /**
   * 使用更深的背景色展现嵌入效果，只对亮色主题生效
   */
  embedded?: boolean
  /**
   * 是否全屏
   */
  fullscreen?: boolean
  /**
   * 是否允许全屏
   */
  fullscreenable?: boolean
  /**
   * 卡片底部区域的类名
   */
  footerClass?: string
  /**
   * 卡片底部区域的样式
   */
  footerStyle?: string | CSSProperties
  /**
   * 卡片头部区域的类名
   */
  headerClass?: string
  /**
   * 卡片头部区域的样式
   */
  headerStyle?: string | CSSProperties
  /**
   * 卡片头部额外内容的类名
   */
  headerExtraClass?: string
  /**
   * 卡片头部额外内容的样式
   */
  headerExtraStyle?: string | CSSProperties
  /**
   * 卡片是否可悬浮
   */
  hoverable?: boolean
  /**
   * 卡片的分段区域设置
   */
  segmented?: boolean | {
    content?: boolean | 'soft'
    footer?: boolean | 'soft'
    action?: boolean | 'soft'
  }
  /**
   * 卡片的尺寸
   */
  size?: 'small' | 'medium' | 'large' | 'huge'
  /**
   * 卡片组件要渲染为什么标签
   */
  tag?: keyof HTMLElementTagNameMap
  /**
   * 卡片的标题
   */
  title?: string
  /**
   * 点击取消按钮的回调
   */
  onCancel?: (event?: MouseEvent) => Promise<void> | void
  /**
   * 点击确认按钮的回调
   */
  onConfirm?: (event?: MouseEvent) => Promise<void> | void
}

export interface CardSlots {
  /**
   * 覆盖内容
   */
  'cover'?: (props?: object) => VNode[]
  /**
   * 头部内容
   */
  'header'?: (props?: object) => VNode[]
  /**
   * 头部额外内容
   */
  'header-extra'?: (props?: object) => VNode[]
  /**
   * 内容
   */
  'default'?: (props?: object) => VNode[]
  /**
   * 操作区域内容
   */
  'footer'?: (props?: object) => VNode[]
  /**
   * 操作区域内容
   */
  'action'?: (props?: object) => VNode[]
}
