import type { FormItemGiProps, GridProps } from 'naive-ui'

export interface FormProps {
  labelPlacement?: 'left' | 'top'
  model?: any
  grid?: GridProps
  items: FormItemProps[]
}

export interface FormItemProps {
  label?: string
  path?: string
  rule?: FormItemGiProps['rule']
  span?: FormItemGiProps['span']
  component?: string
  props?: any
}
