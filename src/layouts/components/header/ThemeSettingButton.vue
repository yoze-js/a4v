<script setup lang="ts">
import HeaderButton from './HeaderButton.vue'
import LayoutSetting from './LayoutSetting.vue'

const [show, toggleShow] = useToggle(false)
</script>

<template>
  <HeaderButton @click="toggleShow(true)">
    <template #trigger>
      <div class="i-icon-park-outline-platte" />
    </template>
    主题配置
  </HeaderButton>

  <LayoutSetting v-model:show="show" />
</template>
