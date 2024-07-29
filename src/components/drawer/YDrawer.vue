<script setup lang="ts">
import { omit } from 'lodash-es'
import type { CardSlots } from '../card/types'
import type { DrawerProps } from './types'

const props = withDefaults(defineProps<DrawerProps>(), {
  action: true,
  autoFocus: false,
  blockScroll: true,
  closable: true,
  closeOnEsc: true,
  fullscreenable: true,
  maskClosable: true,
  nativeScrollbar: true,
  showMask: true,
  trapFocus: true,
  width: 500,
})

defineEmits<{
  /**
   * Drawer 出现后的回调
   */
  'afterEnter'?: []
  /**
   * Drawer 关闭后的回调
   */
  'afterLeave'?: []
  /**
   * 焦点在 Drawer 内部时按下 Esc 键的回调
   */
  'esc'?: []
  /**
   * 点击遮罩的回调
   */
  'maskClick'?: []
  /**
   * 抽屉高度改变时执行的回调函数
   */
  'update:height'?: [value: number]
  /**
   * 抽屉显示状态改变时执行的回调函数
   */
  'update:show': [value: boolean]
  /**
   * 抽屉宽度改变时执行的回调函数
   */
  'update:width'?: [value: number]
}>()

defineSlots<CardSlots>()

const show = defineModel<boolean>('show')
const fullscreen = defineModel<boolean>('fullscreen')

const drawerWidth = computed(() => {
  return fullscreen.value ? '100vw' : formatLength(props.width)
})
const drawerHeight = computed(() => {
  return fullscreen.value ? '100vh' : formatLength(props.height)
})

const popupCardRef = ref()
const { scrollBy, scrollTo } = useScrollbar(popupCardRef)

async function handleCancel() {
  try {
    await props.onCancel?.()
  }
  catch {

  }
  finally {
    show.value = false
  }
}

function handleToggle(value?: boolean) {
  show.value = value ?? !show.value
}

defineExpose({
  /**
   * 切换展示状态
   */
  toggle: handleToggle,
  /**
   * 滚动特定距离
   */
  scrollBy,
  /**
   * 滚动内容
   */
  scrollTo,
})
</script>

<template>
  <NDrawer
    v-bind="omit(props, ['title'])"
    v-model:show="show"
    :height="drawerHeight"
    :width="drawerWidth"
    :class="{
      '!rounded-0': fullscreen,
    }"
    @after-enter="$emit('afterEnter')"
    @after-leave="$emit('afterLeave')"
    @esc="$emit('esc')"
    @mask-click="$emit('maskClick')"
    @update:height="$emit('update:height', $event)"
    @update:width="$emit('update:width', $event)"
  >
    <YPopupCard
      ref="popupCardRef"
      v-model:fullscreen="fullscreen"
      :closable
      :title
      :fullscreenable
      min-height="100vh"
      :on-confirm="onConfirm"
      :on-cancel="handleCancel"
    >
      <slot />
      <template
        v-if="$slots.footer"
        #footer
      >
        <slot name="footer" />
      </template>
    </YPopupCard>
  </NDrawer>
</template>
