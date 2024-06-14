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
    <NTooltip>
      <template #trigger>
        <div
          :style="value === 'vertical' && selectStyle"
          class="h-64px w-96px flex cursor-pointer border border-#e0e0e6 rounded-3px p-8px transition-colors transition-300 dark:border-#ffffff17"
          @click="value = 'vertical'"
        >
          <div
            :style="siderStyle"
            class="mr-3px h-full w-24px rounded-3px"
          />
          <div class="w-full flex flex-col">
            <div
              :style="headerStyle"
              class="mb-3px h-12px w-full rounded-3px"
            />
            <div
              :style="contentStyle"
              class="w-full flex-1 rounded-3px"
            />
          </div>
        </div>
      </template>
      左侧菜单模式
    </NTooltip>

    <!-- <NTooltip>
      <template #trigger>
        <div
          :style="value === 'vertical-mix' && selectStyle"
          class="h-54px w-68px flex cursor-pointer border border-#e0e0e6 rounded-3px p-8px transition-colors transition-300 dark:border-#ffffff17"
          @click="value = 'vertical-mix'"
        >
          <div
            :style="siderStyle"
            class="mr-3px h-full w-16px rounded-3px"
          />
          <div
            :style="siderStyle"
            class="mr-3px h-full w-24px rounded-3px"
          />
          <div class="w-full flex flex-col">
            <div
              :style="headerStyle"
              class="mb-3px h-12px w-full rounded-3px"
            />
            <div
              :style="contentStyle"
              class="w-full flex-1 rounded-3px"
            />
          </div>
        </div>
      </template>
      左侧菜单混合模式
    </NTooltip> -->

    <NTooltip>
      <template #trigger>
        <div
          :style="value === 'horizontal' && selectStyle"
          class="h-64px w-96px flex flex-col cursor-pointer border border-#e0e0e6 rounded-3px p-8px transition-colors transition-300 dark:border-#ffffff17"
          @click="value = 'horizontal'"
        >
          <div
            :style="headerStyle"
            class="mb-3px min-h-12px w-full rounded-3px"
          />
          <div
            :style="contentStyle"
            class="w-full flex-1 rounded-3px"
          />
        </div>
      </template>
      顶部菜单模式
    </NTooltip>

    <NTooltip>
      <template #trigger>
        <div
          :style="value === 'horizontal-mix' && selectStyle"
          class="h-64px w-96px flex flex-col cursor-pointer border border-#e0e0e6 rounded-3px p-8px transition-colors transition-300 dark:border-#ffffff17"
          @click="value = 'horizontal-mix'"
        >
          <div
            :style="headerStyle"
            class="mb-3px min-h-12px w-full rounded-3px"
          />
          <div class="wh-full flex">
            <div
              :style="siderStyle"
              class="mr-3px h-full w-24px rounded-3px"
            />
            <div
              :style="contentStyle"
              class="w-full rounded-3px"
            />
          </div>
        </div>
      </template>
      顶部菜单混合模式
    </NTooltip>
  </NFlex>
</template>
