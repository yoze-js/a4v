<script setup lang="ts">
import type { VNode } from 'vue'
import { omit } from 'lodash-es'
import { dateZhCN, zhCN } from 'naive-ui'
import type { ConfigProviderProps } from './types'

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

// 挂载 naive 组件的方法至 window，以便在路由钩子函数和请求函数里面调用
function registerNaiveTools() {
  window.$loadingBar = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$notification = useNotification()
}

const YNaiveProviderContent = defineComponent({
  name: 'YNaiveProviderContent',
  setup() {
    registerNaiveTools()
  },
  render() {
    return h('div')
  },
})
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
              <YNaiveProviderContent />
              <slot />
            </NNotificationProvider>
          </NModalProvider>
        </NMessageProvider>
      </NLoadingBarProvider>
    </NDialogProvider>
  </NConfigProvider>
</template>
