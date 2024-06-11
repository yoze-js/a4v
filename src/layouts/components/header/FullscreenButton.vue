<script setup lang="ts">
import HeaderButton from '../header/HeaderButton.vue'

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <HeaderButton @click="toggle">
    <template #trigger>
      <div :class="isFullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen'" />
    </template>
    全屏切换
  </HeaderButton>
</template>
