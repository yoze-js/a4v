<script setup lang="ts">
import type { VNode } from 'vue'
import { omit } from 'lodash-es'
import type { DropdownOption } from 'naive-ui'
import type { DropdownButtonProps } from '../dropdown-button/types'

const props = withDefaults(defineProps<DropdownButtonProps>(), {})

const emits = defineEmits<{
  select: [key: string | number, option: DropdownOption]
}>()

defineSlots<{
  /**
   * 内容
   */
  default?: () => VNode[]
  /**
   * 图标
   */
  icon?: () => VNode[]
}>()

function handleSelect(key: string | number, option: DropdownOption) {
  emits('select', key, option)
}
</script>

<template>
  <NDropdown
    trigger="click"
    v-bind="dropdown"
    @select="handleSelect"
  >
    <YButton v-bind="omit(props, ['dropdown'])">
      <template #icon>
        <slot name="icon" />
      </template>
      <slot />
    </YButton>
  </NDropdown>
</template>
