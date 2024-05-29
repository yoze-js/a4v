<script setup lang="ts">
defineProps<{
  transitionName?: string
}>()
</script>

<template>
  <RouterView #="{ Component, route }">
    <Transition
      appear
      mode="out-in"
      :name="transitionName"
    >
      <Component
        :is="Component"
        :key="route.path"
      />
    </Transition>
  </RouterView>
</template>
