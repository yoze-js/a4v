<script setup lang="ts">
import HeaderButton from '../header/HeaderButton.vue'

const { setting } = storeToRefs(useThemeStore())
const collapsed = computed(() => setting.value.sider.collapsed)

function toggle() {
  setting.value.sider.collapsed = !collapsed.value
}
</script>

<template>
  <HeaderButton @click="toggle">
    <template #trigger>
      <div :class="collapsed ? 'i-icon-park-outline-expand-left' : 'i-icon-park-outline-expand-right'" />
    </template>
    {{ collapsed ? '展开' : '折叠' }}菜单
  </HeaderButton>
</template>
