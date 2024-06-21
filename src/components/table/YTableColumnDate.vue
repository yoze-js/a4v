<script setup lang="ts">
import dayjs from 'dayjs'

const props = withDefaults(defineProps<{
  value: string
  format?: string
}>(), {
  format: 'YYYY-MM-DD HH:mm:ss',
})

const value = computed(() => {
  if (!props.value) {
    return null
  }
  return dayjs(props.value).format(props.format)
})
</script>

<template>
  <div>{{ value }}</div>
</template>
