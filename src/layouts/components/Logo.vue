<script setup lang="ts">
const router = useRouter()
const { setting } = storeToRefs(useThemeStore())

const width = computed(() => {
  if (setting.value.layoutMode === 'horizontal')
    return 'auto'

  if (setting.value.sider.collapsed)
    return `${setting.value.sider.collapsedWidth}px`

  return `${setting.value.sider.width}px`
})

function goHome() {
  router.push('/')
}
</script>

<template>
  <div
    class="flex-center cursor-pointer px-16px transition-300"
    :style="{
      width,
      height: `${setting.header.height}px`,
    }"
    @click="goHome"
  >
    <img
      src="/public/vite.svg"
      class="h-32px"
    >
    <div
      v-if="setting.layoutMode === 'horizontal' || !setting.sider.collapsed"
      class="ml-8px whitespace-nowrap text-20px font-700"
    >
      a4v
    </div>
  </div>
</template>
