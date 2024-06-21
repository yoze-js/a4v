<script setup lang="ts">
import type { ButtonProps } from '../button/types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
})
</script>

<template>
  <YButton v-bind="props">
    <slot />
  </YButton>
</template>
