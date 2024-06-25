import type { PopoverProps } from 'naive-ui'
import type { DataTableProps } from 'naive-ui/es/data-table/src/interface'
import type { DrawerProps } from '../drawer/types'

export interface TableProps {
  columns?: any[]
  pagination?: DataTableProps['pagination']
  request: (params?: any) => Promise<any>
}

export interface TableSearchProps {
  value: any
  filter?: 'drawer' | 'popover' | boolean
  popover?: PopoverProps
  drawer?: DrawerProps
}
