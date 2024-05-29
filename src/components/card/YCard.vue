<script setup lang="ts">
import { omit } from 'lodash-es'
import Icon from './components/Icon.vue'
import type { CardProps, CardSlots } from './types'

const props = withDefaults(defineProps<CardProps>(), {
  bordered: true,
})

defineEmits<{
  'update:fullscreen': [value: boolean]
}>()

const slots = defineSlots<CardSlots>()

const fullscreen = defineModel<boolean>('fullscreen')

function handleFullscreen() {
  fullscreen.value = !fullscreen.value
}
</script>

<template>
  <NCard v-bind="omit(props, ['action', 'closable', 'onConfirm', 'onCancel'])">
    <template #header-extra>
      <slot name="header-extra" />
      <NFlex
        align="center"
        justify="end"
        size="small"
      >
        <Icon
          v-if="fullscreenable"
          @click="handleFullscreen"
        >
          <div
            :class="fullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen'"
            class="text-16px"
          />
        </Icon>
        <Icon
          v-if="closable"
          @click="onCancel"
        >
          <div class="i-icon-park-outline-close text-16px" />
        </Icon>
      </NFlex>
    </template>

    <template
      v-for="(_, key) in slots"
      :key="key"
      #[key]
    >
      <slot
        v-if="!['header-extra', 'footeer'].includes(key)"
        :name="key"
      />
    </template>

    <template #footer>
      <slot
        v-if="slots.footer"
        name="footer"
      />
      <NFlex
        v-else-if="action"
        align="center"
        justify="end"
      >
        <YButton :on-click="onCancel">
          取消
        </YButton>
        <YButton
          type="primary"
          :on-click="onConfirm"
        >
          确认
        </YButton>
      </NFlex>
    </template>
  </NCard>
</template>
