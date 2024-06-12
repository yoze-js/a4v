<script setup lang="ts">
import HeaderButton from './HeaderButton.vue'

const { isDark } = storeToRefs(useThemeStore())
const { toggleMode } = useThemeStore()
</script>

<template>
  <HeaderButton @click="toggleMode(isDark ? 'light' : 'dark')">
    <template #trigger>
      <div :class="isDark ? 'i-icon-park-outline-moon' : 'i-icon-park-outline-sun-one'" />
    </template>
    主题切换
  </HeaderButton>
</template>
