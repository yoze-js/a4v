<script setup lang="ts">
import HeaderButton from './HeaderButton.vue'

function goTo() {
  window.open('https://github.com/yoze-js/a4v', '_blank')
}
</script>

<template>
  <HeaderButton @click="goTo">
    <template #trigger>
      <div class="i-icon-park-outline-github-one" />
    </template>
    Github 地址
  </HeaderButton>
</template>
