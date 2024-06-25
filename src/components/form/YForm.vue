<script setup lang="ts">
import { omit } from 'lodash-es'
import type { FormProps } from './types'
import { components } from './components'

const props = withDefaults(defineProps<FormProps>(), {
  labelPlacement: 'left',
})

const model = defineModel<any>('model', { default: reactive({}) })

function getComponent(item: any) {
  return components.get(item.component)
}
</script>

<template>
  <NForm v-bind="omit(props, ['grid', 'items'])">
    <NGrid v-bind="grid">
      <NFormItemGi
        v-for="item in items"
        :key="item.path"
        :span="24"
        v-bind="item"
      >
        <slot
          v-if="$slots[`item-${item.path}`]"
          :name="`item-${item.path}`"
          :props="item"
          :model
        />
        <Component
          :is="getComponent(item)"
          v-else
          v-bind="item.props"
        />
      </NFormItemGi>
    </NGrid>
  </NForm>
</template>
