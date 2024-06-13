<script setup lang="ts">
import type { VNode } from 'vue'
import { omit } from 'lodash-es'
import { dateZhCN, zhCN } from 'naive-ui'
import type { ConfigProviderProps } from './types'

defineOptions({
  name: 'YConfigProvider',
})

const props = withDefaults(defineProps<ConfigProviderProps>(), {
  globalStyle: true,
  progress: true,
})

defineSlots<{
  /**
   * 内容
   */
  default: () => VNode[]
}>()

const dateLocale = computed(() => props.dateLocale ?? dateZhCN)
const locale = computed(() => props.locale ?? zhCN)
</script>

<template>
  <NConfigProvider
    v-bind="omit(props, ['globalStyle', 'progress'])"
    :date-locale
    :locale
  >
    <NDialogProvider>
      <NLoadingBarProvider>
        <NMessageProvider>
          <NModalProvider>
            <NNotificationProvider>
              <NGlobalStyle v-if="globalStyle" />
              <YProgress v-if="progress" />
              <slot />
            </NNotificationProvider>
          </NModalProvider>
        </NMessageProvider>
      </NLoadingBarProvider>
    </NDialogProvider>
  </NConfigProvider>
</template>
