<script setup lang="ts">
import type { DropdownButtonProps } from '../dropdown-button/types'

const props = withDefaults(defineProps<DropdownButtonProps>(), {
  tertiary: true,
  size: 'small',
})
</script>

<template>
  <YDropdownButton v-bind="props">
    <slot v-if="$slots.default" />
    <span v-else>更多</span>
  </YDropdownButton>
</template>
