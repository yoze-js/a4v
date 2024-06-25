<script setup lang="ts">
const emits = defineEmits<{
  click: []
}>()

function handleClick() {
  emits('click')
}
</script>

<template>
  <NTooltip v-bind="$attrs">
    <template #trigger>
      <NButton
        tertiary
        class="!w-34px !p-0"
        @click="handleClick"
      >
        <slot name="trigger" />
      </NButton>
    </template>
    <slot />
  </NTooltip>
</template>
