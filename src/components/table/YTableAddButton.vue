<script setup lang="ts">
import type { ButtonProps } from '../button/types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
})
</script>

<template>
  <YButton v-bind="props">
    <slot v-if="$slots.default" />
    <span v-else>新增</span>
  </YButton>
</template>
