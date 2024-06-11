<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const selected = computed(() => route.path)

const options = [
  {
    key: '/',
    label: '首页',
    icon: () => renderIcon('i-icon-park-outline-home'),
  },
  {
    key: '/about',
    label: '关于',
    icon: () => renderIcon('i-icon-park-outline-tag'),
  },
]

const { setting } = useThemeSetting()

function handleSelect(key: string) {
  router.push(key)
}
</script>

<template>
  <NScrollbar>
    <NMenu
      :value="selected"
      :options
      :collapsed="setting.sider.collapsed"
      :collapsed-width="setting.sider.collapsedWidth"
      :collapsed-icon-size="18"
      :icon-size="18"
      :indent="23"
      class="first:[&_.n-menu-item]:mt-0"
      @update:value="handleSelect"
    />
  </NScrollbar>
</template>
