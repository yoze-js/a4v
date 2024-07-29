<script setup lang="ts">
import type { PageCardProps } from './types'

defineProps<PageCardProps>()

const value = defineModel<any>('value')
</script>

<template>
  <NCard
    :bordered="false"
    content-class="!p-0"
    class="wh-full"
  >
    <NTabs
      v-model:value="value"
      type="line"
      size="large"
      :tabs-padding="24"
      pane-class="!px-24px !py-20px"
      class="wh-full"
    >
      <NTabPane
        v-for="item in list"
        :key="item.name"
        display-directive="show:lazy"
        v-bind="item"
        class="wh-full"
      >
        <slot :name="`tab-${item.name}`" />
      </NTabPane>
    </NTabs>
  </NCard>
</template>
