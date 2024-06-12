<script setup lang="ts">
const { setting } = storeToRefs(useThemeStore())

const configProviderProps = useNaiveConfigProvider({
  themeOverrides: {
    common: {
      borderRadius: '8px',
    },
    Card: {
      borderRadius: '12px',
    },
    Drawer: {
      borderRadius: '12px',
    },
  },
  lightThemeOverrides: computed(() => ({
    common: setting.value?.lightThemeColor,
  })),
  darkThemeOverrides: computed(() => ({
    common: setting.value?.darkThemeColor,
  })),
})
</script>

<template>
  <YConfigProvider v-bind="configProviderProps">
    <RouterView />
  </YConfigProvider>
</template>
