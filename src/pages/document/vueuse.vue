<script setup lang="ts">
definePage({
  meta: {
    title: 'VueUse 文档',
    icon: 'i-logos:vueuse',
  },
})

const [loading, toggle] = useToggle(true)

const iframeRef = ref()

useEventListener(iframeRef, 'load', () => {
  toggle(false)
})
</script>

<template>
  <NSpin
    :show="loading"
    content-class="wh-full"
    class="wh-full p-24px"
  >
    <iframe
      ref="iframeRef"
      src="https://www.vueuse.org"
      class="wh-full rounded-12px"
    />
  </NSpin>
</template>
