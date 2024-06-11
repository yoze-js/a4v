<script setup lang="ts">
const router = useRouter()
const { setting } = useThemeSetting()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div
    class="flex-center cursor-pointer px-16px"
    :style="{ height: `${setting.header.height}px` }"
    @click="goHome"
  >
    <img
      src="/public/vite.svg"
      class="h-32px"
    >
    <div
      v-if="!setting.sider.collapsed"
      class="ml-8px text-20px font-700"
    >
      a4v
    </div>
  </div>
</template>
