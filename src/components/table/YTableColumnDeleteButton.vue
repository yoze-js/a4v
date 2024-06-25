<script setup lang="ts">
import { isBoolean } from 'lodash-es'
import type { ButtonProps } from '../button/types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'error',
  tertiary: true,
  size: 'small',
})

const dialog = computed(() => {
  if (isBoolean(props.dialog) && props.dialog)
    return props.dialog

  return {
    content: '是否确认删除此数据？',
    ...props.dialog,
  }
})
</script>

<template>
  <YButton
    v-bind="props"
    :dialog
  >
    <slot v-if="$slots.default" />
    <span v-else>删除</span>
  </YButton>
</template>
