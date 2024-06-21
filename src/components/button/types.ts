import type { DialogProps } from 'naive-ui'
import type { VNodeChild } from 'vue'

export interface ButtonProps {
  /**
   * 按钮的 DOM 的 type 属性
   */
  attrType?: 'button' | 'reset' | 'submit'
  /**
   * 按钮是否显示为块级
   */
  block?: boolean
  /**
   * 按钮是否显示 border
   */
  bordered?: boolean
  /**
   * 按钮是否为圆形
   */
  circle?: boolean
  /**
   * 按钮颜色（支持形如 #FFF， #FFFFFF， yellow，rgb(0, 0, 0) 的颜色）
   */
  color?: string
  /**
   * 按钮边框是否为虚线
   */
  dashed?: boolean
  /**
   * 按钮是否禁用
   */
  disabled?: boolean
  /**
   * 按钮是否可以被聚焦
   */
  focusable?: boolean
  /**
   * 按钮是否透明
   */
  ghost?: boolean
  /**
   * 按钮是否遵循原生的 focus 行为。Safari 原生的 button 无法通过点击被聚焦，所以默认情况下 naive-ui 做了一些处理使它可以被聚焦，如果你不需要这种行为，或者发现你需要让按钮可被拖动，可以开启这个属性
   */
  nativeFocusBehavior?: boolean
  /**
   * 按钮中图标的位置
   */
  iconPlacement?: 'left' | 'right'
  /**
   * 是否支持键盘操作
   */
  keyboard?: boolean
  /**
   * 按钮是否显示加载状态
   */
  loading?: boolean
  /**
   * 是否是四级按钮
   */
  quaternary?: boolean
  /**
   * 按钮图标的渲染函数
   */
  renderIcon?: () => VNodeChild
  /**
   * 按钮是否显示圆角
   */
  round?: boolean
  /**
   * 按钮的尺寸
   */
  size?: 'tiny' | 'small' | 'medium' | 'large'
  /**
   * 是否是次要按钮
   */
  secondary?: boolean
  /**
   * 按钮文字是否加粗
   */
  strong?: boolean
  /**
   * 是否是三级按钮
   */
  tertiary?: boolean
  /**
   * 是否显示为文本按钮
   */
  text?: boolean
  /**
   * 按钮文字颜色（支持形如 #FFF， #FFFFFF， yellow，rgb(0, 0, 0) 的颜色）
   */
  textColor?: string
  /**
   * 按钮的类型
   */
  type?: 'default' | 'tertiary' | 'primary' | 'info' | 'success' | 'warning' | 'error'
  /**
   *  按钮需要被渲染为什么标签
   */
  tag?: keyof HTMLElementTagNameMap
  /**
   * 对话框属性
   */
  dialog?: DialogProps | boolean
  /**
   * 点击事件
   * @param e 鼠标事件
   */
  onClick?: (e?: MouseEvent) => Promise<void> | void
  /**
   * 对话框点击确认事件
   * @param e 鼠标事件
   */
  onPositiveClick?: (e?: MouseEvent) => boolean | Promise<boolean> | any
  /**
   * 对话框点击取消事件
   * @param e 鼠标事件
   */
  onNegativeClick?: (e?: MouseEvent) => boolean | Promise<boolean> | any
}
