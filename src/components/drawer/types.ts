import type { ScrollbarProps } from 'naive-ui'
import type { CSSProperties } from 'vue'
import type { CardProps } from '../card/types'

export interface DrawerProps extends CardProps {
  /**
   * 是否自动聚焦 Drawer 第一个可聚焦的元素
   */
  autoFocus?: boolean
  /**
   * 是否在打开时禁用 body 滚动
   */
  blockScroll?: boolean
  /**
   * 是否在摁下 Esc 键的时候关闭 Drawer
   */
  closeOnEsc?: boolean
  /**
   * 抽屉可滚动内容节点的类名
   */
  contentClass?: string
  /**
   * 抽屉可滚动内容节点的样式
   */
  contentStyle?: string | CSSProperties
  /**
   * 抽屉的默认宽度，在位置是 left 和 right 时生效
   */
  defaultWidth?: string | number
  /**
   * 抽屉的默认高度，在位置是 top 和 bottom 时生效
   */
  defaultHeight?: string | number
  /**
   * n-drawer 在控制内容是否渲染时使用的指令，if 对应 v-if，show 对应 v-show
   */
  displayDirective?: 'show' | 'if'
  /**
   * 抽屉的高度，在位置是 top 和 bottom 时生效
   */
  height?: string | number
  /**
   * 点击遮罩时是否发出 update:show 事件
   */
  maskClosable?: boolean
  /**
   * 拖动时的最大宽度
   */
  maxWidth?: number
  /**
   * 拖动时的最大高度
   */
  maxHeight?: number
  /**
   * 拖动时的最小宽度
   */
  minWidth?: number
  /**
   * 拖动时的最小高度
   */
  minHeight?: number
  /**
   * 是否使用原生滚动
   */
  nativeScrollbar?: boolean
  /**
   * 抽屉展示的位置
   */
  placement?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * 抽屉是否可以调整宽度、高度
   */
  resizable?: boolean
  /**
   * 属性参考 Scrollbar props
   */
  scrollbarProps?: ScrollbarProps
  /**
   * 是否展示抽屉
   */
  show?: boolean
  /**
   * 是否显示遮罩，如果设为 transparent 会展示透明遮罩，如果设为 false 会禁用 trap-focus
   */
  showMask?: boolean | 'transparent'
  /**
   * 抽屉出现的区域
   */
  to?: string | HTMLElement
  /**
   * 是否将焦点锁定在 Drawer 内部
   */
  trapFocus?: boolean
  /**
   * 抽屉的宽度，在位置是 left 和 right 时生效
   */
  width?: string | number
  /**
   * 抽屉的 z-index
   */
  zIndex?: number
}
