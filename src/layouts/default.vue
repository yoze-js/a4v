<script setup lang="ts">
const router = useRouter()

function go(path: string) {
  router.push(path)
}
</script>

<template>
  <YLayout class="!h-100vh">
    <template #sider>
      <div class="wh-full flex-center">
        <NFlex vertical>
          <NButton @click="go('/')">
            首页
          </NButton>
          <NButton @click="go('/about')">
            关于
          </NButton>
        </NFlex>
      </div>
    </template>

    <template #header>
      <div class="wh-full flex-center">
        header
      </div>
    </template>

    <div class="wh-full flex flex-col overflow-hidden rd-bl-12px rd-tl-12px bg-#f3f3f5 dark:bg-#101014">
      <RouterView />
    </div>

    <template #footer>
      <div class="wh-full flex-center">
        Copyright © 2024-present Yoze
      </div>
    </template>
  </YLayout>
</template>
