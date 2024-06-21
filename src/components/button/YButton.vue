<script setup lang="ts">
import type { VNode } from 'vue'
import { isBoolean, omit } from 'lodash-es'
import type { ButtonProps } from './types'

defineOptions({
  name: 'YButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  bordered: true,
  focusable: true,
  keyboard: true,
})

defineSlots<{
  /**
   * 内容
   */
  default?: () => VNode[]
  /**
   * 图标
   */
  icon?: () => VNode[]
}>()

const dialog = useDialog()

function isPromise(obj: any): boolean {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

const [loading, toggleLoading] = useToggle()

async function handleClick(e: MouseEvent) {
  if (props.dialog) {
    const d = dialog.create({
      autoFocus: false,
      type: 'warning',
      title: '提示',
      content: '是否确认执行此操作？',
      positiveText: '确认',
      negativeText: '取消',
      onPositiveClick: async (event: MouseEvent) => {
        d.loading = true
        return props.onPositiveClick?.(event)
      },
      onNegativeClick: async (event: MouseEvent) => {
        return props.onNegativeClick?.(event)
      },
      ...(isBoolean(props.dialog) ? {} : props.dialog),
    })

    return
  }

  try {
    const click = props.onClick?.(e)
    if (isPromise(click)) {
      toggleLoading(true)
      await click
    }
  }
  finally {
    toggleLoading(false)
  }
}
</script>

<template>
  <NButton
    v-bind="omit(props, ['onClick'])"
    :loading
    @click.stop="handleClick"
  >
    <template #icon>
      <slot name="icon" />
    </template>

    <slot />
  </NButton>
</template>
