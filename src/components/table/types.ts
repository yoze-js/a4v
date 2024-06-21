import type { DataTableProps as NDataTableProps } from 'naive-ui'

export interface TableProps {
  columns?: any[]
  data?: NDataTableProps['data']
  loading?: NDataTableProps['loading']
  remote?: NDataTableProps['remote']
}

export interface TableSearchProps {
  value: any
  keyword?: string
  clearable?: boolean
  placeholder?: string
}
