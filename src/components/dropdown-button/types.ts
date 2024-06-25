import type { DropdownProps } from 'naive-ui'
import type { ButtonProps } from '../button/types'

export interface DropdownButtonProps extends ButtonProps {
  /**
   * 下拉菜单属性
   */
  dropdown?: DropdownProps
}
