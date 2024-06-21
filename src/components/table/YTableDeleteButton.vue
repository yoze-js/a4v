<script setup lang="ts">
import type { ButtonProps } from '../button/types'

const props = withDefaults(defineProps<ButtonProps>(), {
  dialog: () => ({
    content: '是否确认删除已选数据？',
  }),
  type: 'error',
})
</script>

<template>
  <YButton v-bind="props">
    <slot />
  </YButton>
</template>
