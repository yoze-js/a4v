<script setup lang="ts">
import { isBoolean } from 'lodash-es'
import type { ButtonProps } from '../button/types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'error',
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
    <slot />
  </YButton>
</template>
