<script setup lang="ts">
definePage({
  meta: {
    title: '用户管理',
    icon: 'i-icon-park-outline-user',
  },
})

const list = [{ name: 'user', tab: '用户管理' }]
</script>

<template>
  <div class="wh-full flex p-24px">
    <YPageCard :list="list">
      <template #tab-user>
        user
      </template>
    </YPageCard>
  </div>
</template>
