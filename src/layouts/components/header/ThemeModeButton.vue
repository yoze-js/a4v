<script setup lang="ts">
import HeaderButton from './HeaderButton.vue'

const mode = useColorMode()
const isDark = computed(() => mode.value === 'dark')
function toggle() {
  mode.value = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <HeaderButton @click="toggle">
    <template #trigger>
      <div :class="isDark ? 'i-icon-park-outline-moon' : 'i-icon-park-outline-sun-one'" />
    </template>
    主题切换
  </HeaderButton>
</template>
