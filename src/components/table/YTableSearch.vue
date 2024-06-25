<script setup lang="ts">
import type { TableSearchProps } from './types'

withDefaults(defineProps<TableSearchProps>(), {})

const emits = defineEmits<{
  search: [value: any]
}>()

const value = defineModel<any>('value', { default: reactive({}) })

const [show, toggleShow] = useToggle()

function handleOpen() {
  toggleShow(true)
}

function handleClose() {
  toggleShow(false)
}

function handleReset() {
  for (const key in value.value) {
    value.value[key] = null
  }
}

function handleSearch() {
  toggleShow(false)
  emits('search', value.value)
}
</script>

<template>
  <div class="w-full">
    <NFlex align="center" :wrap="false">
      <slot />

      <div v-if="filter">
        <NButton
          v-if="filter === 'drawer'"
          class="!w-34px !p-0"
          @click="handleOpen"
        >
          <div class="i-icon-park-outline-filter" />
        </NButton>
        <PopoverButton
          v-else-if="filter === 'popover'"
          :show="show"
          :width="350"
          content-class="!pt-16px !px-16px"
          footer-class="!border-t-0 !pb-16px"
          v-bind="popover"
          @click="handleOpen"
          @clickoutside="handleClose"
        >
          <template #trigger>
            <div class="i-icon-park-outline-filter" />
          </template>
          <slot name="filter" />

          <template #footer>
            <NFlex justify="end">
              <YButton
                @click="handleReset"
              >
                重置
              </YButton>
              <YButton
                type="primary"
                @click="handleSearch"
              >
                搜索
              </YButton>
            </NFlex>
          </template>
        </PopoverButton>
      </div>
    </NFlex>

    <YDrawer
      v-if="filter === true || filter === 'drawer'"
      v-model:show="show"
      title="搜索条件"
      :width="350"
      v-bind="drawer"
    >
      <slot name="filter" />
      <template #footer>
        <NFlex justify="end">
          <YButton
            @click="handleReset"
          >
            重置
          </YButton>
          <YButton
            type="primary"
            @click="handleSearch"
          >
            搜索
          </YButton>
        </NFlex>
      </template>
    </YDrawer>
  </div>
</template>
