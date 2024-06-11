<script setup lang="ts">
const emits = defineEmits<{
  click: []
}>()

const { setting } = useThemeSetting()
const mode = useColorMode()
const isDark = computed(() => mode.value === 'dark')

function handleClick() {
  emits('click')
}
</script>

<template>
  <NTooltip>
    <template #trigger>
      <div
        :class="{
          'hover:bg-#ffffff1f': !isDark && setting?.header.inverted,
        }"
        class="h-32px w-32px flex-center cursor-pointer rounded-8px bg-#2e33380d transition-300 dark:bg-#ffffff14 hover:bg-#2e333817 dark:hover:bg-#ffffff1f"
        @click="handleClick"
      >
        <slot name="trigger" />
      </div>
    </template>
    <slot />
  </NTooltip>
</template>
