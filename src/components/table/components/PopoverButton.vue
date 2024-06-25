<script setup lang="ts">
const emits = defineEmits<{
  click: []
}>()

function handleClick() {
  emits('click')
}
</script>

<template>
  <NPopover v-bind="$attrs" display-directive="show">
    <template #trigger>
      <NButton
        class="!w-34px !p-0"
        @click="handleClick"
      >
        <slot name="trigger" />
      </NButton>
    </template>
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </NPopover>
</template>
