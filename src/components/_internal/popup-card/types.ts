import type { CardProps } from '../../card/types'

export interface PopupCardProps extends CardProps {
  /**
   *  最大高度
   */
  maxHeight?: number | string
  /**
   *  最小高度
   */
  minHeight?: number | string
}
