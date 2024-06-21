<script setup lang="ts">
import type { CardSlots } from '../../card/types'
import type { PopupCardProps } from './types'

defineOptions({
  name: 'YPopupCard',
})

const props = withDefaults(defineProps<PopupCardProps>(), {
  action: true,
  bordered: false,
  closable: true,
  contentStyle: () => ({
    padding: 0,
  }),
  fullscreenable: true,
  maxHeight: '100vh',
  segmented: () => ({
    content: true,
    footer: true,
    action: true,
  }),
})

const slots = defineSlots<CardSlots>()

const fullscreen = defineModel<boolean>('fullscreen')

const cardRef = ref()
const headerHeight = computed(() => {
  return formatLength(cardRef.value?.$el?.querySelector('.n-card-header')?.offsetHeight ?? '0px')
})
const actionHeight = computed(() => {
  return formatLength(cardRef.value?.$el?.querySelector('.n-card__footer')?.offsetHeight ?? '0px')
})
const scrollBarStyle = computed(() => {
  return {
    maxHeight:
      `calc(${props.maxHeight} - 1px - ${headerHeight.value} - ${actionHeight.value})`,
    minHeight:
      props.minHeight ? `calc(${props.minHeight} - 1px - ${headerHeight.value} - ${actionHeight.value})` : null,
  }
})

const scrollbarRef = ref()
const { scrollBy, scrollTo } = useScrollbar(scrollbarRef)

defineExpose({
  /**
   *  滚动特定距离
   */
  scrollBy,
  /**
   *  滚动内容
   */
  scrollTo,
})
</script>

<template>
  <YCard
    ref="cardRef"
    v-bind="props"
    v-model:fullscreen="fullscreen"
  >
    <NScrollbar
      ref="scrollbarRef"
      :style="scrollBarStyle"
    >
      <div class="px-24px py-20px">
        <slot />
      </div>
    </NScrollbar>
    <template
      v-if="slots.footer"
      #footer
    >
      <slot name="footer" />
    </template>
  </YCard>
</template>
