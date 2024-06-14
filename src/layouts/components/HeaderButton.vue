<script setup lang="ts">
const emits = defineEmits<{
  click: []
}>()

const { isDark, setting } = storeToRefs(useThemeStore())

function handleClick() {
  emits('click')
}
</script>

<template>
  <NTooltip>
    <template #trigger>
      <div
        :class="{
          'hover:bg-#ffffff1f active:bg-#ffffff14': !isDark && setting?.header.inverted,
        }"
        class="h-32px w-32px flex-center cursor-pointer rounded-8px bg-#2e33380d transition-300 active:bg-#2e333821 dark:(bg-#ffffff14 active:bg-#ffffff14 hover:bg-#ffffff1f) hover:bg-#2e333817"
        @click="handleClick"
      >
        <slot name="trigger" />
      </div>
    </template>
    <slot />
  </NTooltip>
</template>
