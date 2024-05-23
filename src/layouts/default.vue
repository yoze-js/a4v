<script setup lang="ts">
const router = useRouter()

function go(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="h-100vh w-full flex-center flex-col">
    <RouterView />
    <NFlex class="mt-16px">
      <NButton @click="go('/')">
        首页
      </NButton>
      <NButton @click="go('/about')">
        关于
      </NButton>
    </NFlex>
  </div>
</template>
