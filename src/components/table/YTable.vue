<script setup lang="tsx">
import type { DataTableBaseColumn } from 'naive-ui'
import { NFlex } from 'naive-ui'
import { isBoolean } from 'lodash-es'
import type { TableProps } from './types'
import YTableColumnIcon from './YTableColumnIcon.vue'
import YTableColumnDate from './YTableColumnDate.vue'

defineOptions({
  name: 'YTable',
})

const props = withDefaults(defineProps<TableProps>(), {
  columns: () => [],
  pagination: () => ({
    pageSize: 10,
    pageSizes: [10, 20, 50, 100, 200],
    showQuickJumper: true,
    showSizePicker: true,
  }),
})

const slots = defineSlots<{
  action?: () => any
  search?: () => any
}>()

const tableRef = ref()
const { toggle: toggleFullscreen } = useFullscreen(tableRef)

const columnSlotKeys = computed(() => {
  return Object.keys(slots).filter(key => !['action', 'search'].includes(key))
})
const columns = computed(() => {
  for (const column of props.columns) {
    const { key, component, componentProps, flex } = column

    let render: DataTableBaseColumn['render']

    if (component) {
      render = (row: any) => {
        let Comp
        switch (component) {
          case 'icon':
            Comp = YTableColumnIcon
            break
          case 'date':
            Comp = YTableColumnDate
            break
        }

        if (Comp) {
          return (
            <Comp
              {...componentProps}
              value={row[key]}
            />
          )
        }
      }
    }

    const slotKey: string = `column-${key}`
    if (columnSlotKeys.value.includes(slotKey)) {
      render = (row: any, index: number) => {
        return (slots as any)[slotKey]?.({ row, index })
      }
    }

    if (flex) {
      column.render = (row: any, index: number) => {
        return (
          <NFlex
            align="center"
            justify="center"
          >
            { render?.(row, index) ?? row[key]}
          </NFlex>
        )
      }
    }
    else {
      column.render = render
    }
  }
  return props.columns
})
const data = ref<any>([])
const [loading, toggleLoading] = useToggle()
const pagination = ref<any>({
  ...props.pagination,
  itemCount: 0,
  page: 1,
  onUpdatePageSize: (pageSize: number) => {
    pagination.value.pageSize = pageSize
    pagination.value.page = 1
    handleLoad()
  },
  onUpdatePage: (page: number) => {
    pagination.value.page = page
    handleLoad()
  },
})
const showPagination = computed(() => {
  if (isBoolean(props.pagination) && !props.pagination) {
    return false
  }
  return true
})

async function handleLoad() {
  try {
    toggleLoading(true)
    data.value = await props.request()
  }
  catch (err) {
    console.error(err)
  }
  finally {
    toggleLoading(false)
  }
}

function handleRefresh() {
  handleLoad()
}

function handleFullscreen() {
  toggleFullscreen()
}

onMounted(() => {
  handleLoad()
})

defineExpose({
  refresh: handleRefresh,
})
</script>

<template>
  <div
    ref="tableRef"
    class="wh-full flex flex-col"
  >
    <NFlex
      align="center"
      justify="space-between"
      class="mb-12px"
    >
      <div class="flex-y-center">
        <slot name="action" />
      </div>
      <div class="flex-y-center">
        <NFlex align="center">
          <slot name="search" />
        </NFlex>
        <NDivider
          v-if="slots.search"
          vertical
          class="!mx-16px"
        />
        <NFlex align="center">
          <YTableTool
            :columns
            @refresh="handleRefresh"
            @fullscreen="handleFullscreen"
          />
        </NFlex>
      </div>
    </NFlex>

    <NDataTable
      v-bind="props"
      :data
      :columns
      :loading
      :pagination="showPagination ? pagination : false"
      remote
      flex-height
      class="flex-1"
    />
  </div>
</template>
