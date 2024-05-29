<script setup lang="ts">
import { useThemeVars } from 'naive-ui'

defineProps<{
  value: string
}>()

const value = defineModel<string>('value')

const themeVars = useThemeVars()

const headerStyle = computed(() => ({ background: themeVars.value.primaryColor }))
const siderStyle = computed(() => ({ background: `${themeVars.value.primaryColor}aa` }))
const contentStyle = computed(() => ({ background: `${themeVars.value.primaryColor}65` }))
const selectStyle = computed(() => ({ borderColor: themeVars.value.primaryColor }))
</script>

<template>
  <NFlex
    align="center"
    justify="center"
  >
    <div
      :style="value === 'vertical' && selectStyle"
      class="h-64px w-96px flex cursor-pointer border border-#e0e0e6 rounded-3px p-8px transition-colors transition-300 dark:border-#ffffff17"
      @click="value = 'vertical'"
    >
      <div
        :style="siderStyle"
        class="mr-4px h-full w-24px rounded-3px"
      />
      <div class="w-full flex flex-col">
        <div
          :style="headerStyle"
          class="mb-4px h-12px w-full rounded-3px"
        />
        <div
          :style="contentStyle"
          class="w-full flex-1 rounded-3px"
        />
      </div>
    </div>

    <div
      :style="value === 'horizontal' && selectStyle"
      class="h-64px w-96px flex flex-col cursor-pointer border border-#e0e0e6 rounded-3px p-8px transition-colors transition-300 dark:border-#ffffff17"
      @click="value = 'horizontal'"
    >
      <div
        :style="headerStyle"
        class="mb-4px min-h-12px w-full rounded-3px"
      />
      <div class="wh-full flex">
        <div
          :style="siderStyle"
          class="mr-4px h-full w-24px rounded-3px"
        />
        <div
          :style="contentStyle"
          class="w-full rounded-3px"
        />
      </div>
    </div>

    <div
      :style="value === 'horizontal-simple' && selectStyle"
      class="h-64px w-96px flex flex-col cursor-pointer border border-#e0e0e6 rounded-3px p-8px transition-colors transition-300 dark:border-#ffffff17"
      @click="value = 'horizontal-simple'"
    >
      <div
        :style="headerStyle"
        class="mb-4px min-h-12px w-full rounded-3px"
      />
      <div
        :style="contentStyle"
        class="w-full flex-1 rounded-3px"
      />
    </div>
  </NFlex>
</template>
