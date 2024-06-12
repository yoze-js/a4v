<script setup lang="ts">
import { dateEnUS, dateZhCN, enUS, zhCN } from 'naive-ui'

const { locale } = useI18n()

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
  locale: computed(() => locale.value === 'zh-CN' ? zhCN : locale.value === 'en' ? enUS : null),
  dateLocale: computed(() => locale.value === 'zh-CN' ? dateZhCN : locale.value === 'en' ? dateEnUS : null),
})
</script>

<template>
  <YConfigProvider v-bind="configProviderProps">
    <RouterView />
  </YConfigProvider>
</template>
