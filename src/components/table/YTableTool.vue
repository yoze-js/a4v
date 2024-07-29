<script setup lang="ts">
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import TooltipButton from './components/TooltipButton.vue'

defineProps<{
  columns: any[]
  fullscreen?: boolean
}>()

const emits = defineEmits<{
  refresh: []
  fullscreen: []
}>()

const columns = defineModel<any[]>('columns', { default: reactive([]) })

const columnCheckedkeys = computed(() => {
  const filter = columns.value.filter((column: any) => !column.hidden)
  return filter.map((column: any) => column.key)
})

const [listRef, list] = useDragAndDrop<any>(columns, {
  dragHandle: '.drag-handle',
})

function handleUpdateCheckedKeys(val: any[]) {
  for (const column of columns.value) {
    column.hidden = !val.includes(column.key)
  }
}

function handleRefresh() {
  emits('refresh')
}

function handleFullscreen() {
  emits('fullscreen')
}
</script>

<template>
  <NFlex
    :wrap="false"
    align="center"
  >
    <TooltipButton @click="handleRefresh">
      <template #trigger>
        <div class="i-icon-park-outline-refresh" />
      </template>
      刷新
    </TooltipButton>
    <TooltipButton @click="handleFullscreen">
      <template #trigger>
        <div :class="fullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen'" />
      </template>
      全屏切换
    </TooltipButton>

    <NPopover
      trigger="click"
      placement="bottom-end"
      display-directive="show"
    >
      <template #trigger>
        <div>
          <TooltipButton>
            <template #trigger>
              <div class="i-icon-park-outline-setting-two" />
            </template>
            列设置
          </TooltipButton>
        </div>
      </template>
      <NCheckboxGroup
        :value="columnCheckedkeys"
        @update:value="handleUpdateCheckedKeys"
      >
        <div
          ref="listRef"
          class="flex flex-col"
        >
          <NEl
            v-for="column in list"
            v-show="column.key !== 'action'"
            :key="column.key"
            class="group my-4px flex-y-center justify-between"
          >
            <NCheckbox
              :value="column.key"
              :label="column.title"
              class="flex-1"
            />
            <div class="i-icon-park-outline-drag drag-handle invisible ml-16px cursor-move group-hover:visible" />
          </NEl>
        </div>
      </NCheckboxGroup>
    </NPopover>
  </NFlex>
</template>
