<script setup lang="ts">
const { isDark, setting } = storeToRefs(useThemeStore())

const options = [
  {
    key: 'me',
    label: '个人中心',
    icon: () => renderIcon('i-icon-park-outline-user'),
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    label: '退出登录',
    icon: () => renderIcon('i-icon-park-outline-logout'),
  },

]
</script>

<template>
  <NDropdown
    :options="options"
    trigger="click"
  >
    <div
      :class="{
        'hover:bg-#ffffff1f active:bg-#ffffff14': !isDark && setting?.header.inverted,
      }"
      class="h-42px max-w-150px flex-center cursor-pointer rounded-full bg-#2e33380d px-8px transition-300 active:bg-#2e333821 dark:(bg-#ffffff14 active:bg-#ffffff14 hover:bg-#ffffff1f) hover:bg-#2e333817"
    >
      <NAvatar
        src="https://avatars.githubusercontent.com/u/108928776?s=80&v=4"
        round
        class="mr-8px h-28px min-w-28px w-28px bg-transparent"
      />
      <NEllipsis>
        超级管理员
      </NEllipsis>
    </div>
  </NDropdown>
</template>
