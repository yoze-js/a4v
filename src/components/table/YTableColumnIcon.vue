<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

<template>
  <div
    :class="value"
    class="w-full"
  />
</template>
