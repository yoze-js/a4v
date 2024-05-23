import type { DialogProps, ButtonProps as NButtonProps } from 'naive-ui'

export interface ButtonProps extends /* @vue-ignore */ NButtonProps {
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
