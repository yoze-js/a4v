<script setup lang="ts">
import HeaderButton from './HeaderButton.vue'

const { locale } = useI18n()

const options = [
  {
    key: 'zh-CN',
    label: '中文',
  },
  {
    key: 'en',
    label: 'English',
  },
]

function handleSelect(key: string) {
  locale.value = key
}
</script>

<template>
  <NDropdown
    :value="locale"
    :options="options"
    trigger="click"
    @select="handleSelect"
  >
    <div>
      <HeaderButton>
        <template #trigger>
          <div class="i-icon-park-outline-translate" />
        </template>
        语言切换
      </HeaderButton>
    </div>
  </NDropdown>
</template>
