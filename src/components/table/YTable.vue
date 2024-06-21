<script setup lang="ts">
import type { TableProps } from './types'

defineOptions({
  name: 'YTable',
})

const props = withDefaults(defineProps<TableProps>(), {
  columns: () => [],
})

const slots = defineSlots<{
  action?: () => any
  search?: () => any
}>()

const columnSlotKeys = computed(() => {
  return Object.keys(slots).filter(key => !['action', 'search'].includes(key))
})
const columns = computed(() => {
  for (const column of props.columns) {
    const slotKey: string = `column-${column.key}`
    if (columnSlotKeys.value.includes(slotKey)) {
      column.render = (row: any, index: number) => (slots as any)[slotKey]?.({ row, index })
    }
  }
  return props.columns
})
</script>

<template>
  <div class="wh-full flex flex-col">
    <NFlex
      align="center"
      justify="space-between"
      class="mb-12px"
    >
      <NFlex align="center">
        <slot name="action" />
      </NFlex>
      <NFlex align="center">
        <slot name="search" />
      </NFlex>
    </NFlex>

    <NDataTable
      v-bind="props"
      flex-height
      :columns
      class="flex-1"
    />
  </div>
</template>
