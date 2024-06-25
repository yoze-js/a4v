<script setup lang="ts">
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import TooltipButton from './components/TooltipButton.vue'

const props = defineProps<{
  columns: any[]
}>()

const emits = defineEmits<{
  refresh: []
  fullscreen: []
}>()

const [listRef, list] = useDragAndDrop(props.columns)

function handleRefresh() {
  emits('refresh')
}

function handleFullscreen() {
  emits('fullscreen')
}
</script>

<template>
  <NFlex align="center">
    <TooltipButton @click="handleRefresh">
      <template #trigger>
        <div class="i-icon-park-outline-refresh" />
      </template>
      刷新
    </TooltipButton>
    <TooltipButton @click="handleFullscreen">
      <template #trigger>
        <div class="i-icon-park-outline-full-screen" />
      </template>
      全屏
    </TooltipButton>

    <NPopover
      trigger="click"
      placement="bottom-end"
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
      <NCheckboxGroup>
        <div
          ref="listRef"
          class="flex flex-col"
        >
          <div
            v-for="column in list"
            :key="column.key"
            class="group my-4px flex-y-center justify-between"
          >
            <NCheckbox
              :value="column.key"
              :label="column.title"
              class="flex-1"
            />
            <div class="i-icon-park-outline-drag invisible ml-16px cursor-move group-hover:visible" />
          </div>
        </div>
      </NCheckboxGroup>
    </NPopover>
  </NFlex>
</template>
