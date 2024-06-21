<script setup lang="ts">
import { omit } from 'lodash-es'
import type { TableSearchProps } from './types'

const props = withDefaults(defineProps<TableSearchProps>(), {
  clearable: true,
  keyword: 'keyword',
  placeholder: '请输入关键词',
})

const emits = defineEmits<{
  search: [value: any]
}>()

const value = defineModel<any>('value', { default: reactive({}) })

const [show, toggleShow] = useToggle()

function handleOpen() {
  toggleShow(true)
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
  <div>
    <NInputGroup>
      <NInput
        v-bind="omit(props, ['value'])"
        v-model:value="value[keyword]"
      >
        <template #prefix>
          <div class="i-icon-park-outline-search mr-4px" />
        </template>
      </NInput>
      <NButton @click="handleOpen">
        <div class="i-icon-park-outline-filter" />
      </NButton>
    </NInputGroup>

    <YDrawer
      v-model:show="show"
      title="搜索"
      :width="350"
    >
      搜索条件

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
