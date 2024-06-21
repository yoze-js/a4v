<script setup lang="ts">
import type { CSSProperties, VNode } from 'vue'
import type { LayoutProps } from './types'

defineOptions({
  name: 'YLayout',
})

const props = withDefaults(defineProps<LayoutProps>(), {
  siderCollapsedWidth: 64,
  footerHeight: 64,
  headerHeight: 64,
  mode: 'vertical',
  showHeader: true,
  showFooter: true,
  showSider: true,
  siderWidth: 240,
})

defineSlots<{
  /**
   * 内容
   *
   */
  default?: (props?: object) => VNode[]
  /**
   * 底栏
   */
  footer?: (props?: object) => VNode[]
  /**
   * 顶栏
   */
  header?: (props?: object) => VNode[]
  /**
   * 侧边栏
   */
  sider?: (props?: { collapsed?: boolean }) => VNode[]
}>()

const collapsed = defineModel<boolean>('collapsed', { default: false })
const siderCollapsedWidthStr = computed(() => {
  return formatLength(props.siderCollapsedWidth)
})
const footerHeightStr = computed(() => {
  return formatLength(props.footerHeight)
})
const headerHeightStr = computed(() => {
  return formatLength(props.headerHeight)
})
const isHorizontal = computed(() => {
  return props.mode === 'horizontal'
})
const siderWidthStr = computed(() => {
  return formatLength(props.siderWidth)
})
const siderResultWithStr = computed(() => {
  return collapsed.value ? siderCollapsedWidthStr.value : siderWidthStr.value
})
const contentWrapperStyle = computed<CSSProperties>(() => {
  const reduceHeaderHeight = props.showHeader ? ` - ${headerHeightStr.value}` : ''
  const reduceFooterHeight = props.showFooter ? ` - ${footerHeightStr.value}` : ''
  return {
    paddingLeft: props.showSider ? siderResultWithStr.value : 0,
    height: `calc(100%${reduceHeaderHeight}${reduceFooterHeight})`,
  }
})
const footerWrapperStyle = computed<CSSProperties>(() => {
  return {
    paddingLeft: props.showSider ? siderResultWithStr.value : 0,
    height: footerHeightStr.value,
  }
})
const headerWrapperStyle = computed<CSSProperties>(() => {
  return {
    paddingLeft: isHorizontal.value ? 0 : props.showSider ? siderResultWithStr.value : 0,
    height: headerHeightStr.value,
  }
})
const siderWrapperStyle = computed<CSSProperties>(() => {
  return {
    paddingTop: isHorizontal.value ? props.showHeader ? headerHeightStr.value : 0 : 0,
    width: siderResultWithStr.value,
  }
})

const siderTransform = computed(() => `translateX(-${siderResultWithStr.value})`)
</script>

<template>
  <div class="y-layout relative h-full flex flex-col">
    <Transition name="layout-sider-transition">
      <div
        v-if="showSider"
        class="absolute z-9 h-full transition-300 transition-property-width,padding"
        :style="siderWrapperStyle"
      >
        <div
          class="box-border h-full overflow-hidden"
          :class="siderClass"
          :style="siderStyle"
        >
          <slot
            name="sider"
            :collapsed="collapsed"
          />
        </div>
      </div>
    </Transition>
    <div
      v-if="showHeader"
      class="h-full flex-grow transition-300 transition-property-padding"
      :style="headerWrapperStyle"
    >
      <div
        class="box-border h-full overflow-hidden"
        :class="headerClass"
        :style="headerStyle"
      >
        <slot name="header" />
      </div>
    </div>
    <div
      class="transition-300 transition-property-padding"
      :style="contentWrapperStyle"
    >
      <div
        class="box-border h-full overflow-hidden"
        :class="contentClass"
        :style="contentStyle"
      >
        <slot />
      </div>
    </div>
    <div
      v-if="showFooter"
      class="h-full flex-shrink transition-300 transition-property-padding"
      :style="footerWrapperStyle"
    >
      <div
        class="box-border h-full overflow-hidden"
        :class="footerClass"
        :style="footerStyle"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-sider-transition-enter-active,
.layout-sider-transition-leave-active {
  transition: all 0.3s;
}
.layout-sider-transition-enter-from {
  transform: v-bind('siderTransform');
  opacity: 0;
}
.layout-sider-transition-leave-to {
  transform: v-bind('siderTransform');
  opacity: 0;
}
</style>
