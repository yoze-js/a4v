<script setup lang="ts">
import type { ButtonProps } from '../button/types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  tertiary: true,
  size: 'small',
})
</script>

<template>
  <YButton v-bind="props">
    <slot v-if="$slots.default" />
    <span v-else>编辑</span>
  </YButton>
</template>
