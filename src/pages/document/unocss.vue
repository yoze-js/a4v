<script setup lang="ts">
definePage({
  meta: {
    title: 'UnoCSS 文档',
    icon: 'i-logos:unocss',
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
      src="https://unocss.dev/"
      class="wh-full rounded-12px"
    />
  </NSpin>
</template>
