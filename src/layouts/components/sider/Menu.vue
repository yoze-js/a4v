<script setup lang="ts">
import { menus } from '~/settings/menu'

const route = useRoute()
const router = useRouter()

const selected = computed(() => route.path)
const expandedKeys = ref([])
const options = computed(() => traverseTree(menus))

watch(
  selected,
  () => {
    expandedKeys.value = findParentNodes(menus, selected.value)?.map((item: any) => item.key)
  },
  {
    immediate: true,
  },
)

const { setting } = storeToRefs(useThemeStore())

function handleSelect(key: string, option: any) {
  if (option.url) {
    window.open(option.url, '_blank')
    return
  }

  router.push(key)
}

function traverseTree(nodes: any[]) {
  return nodes.map((node) => {
    const newNode = { ...node }
    newNode.icon = () => renderIcon(node.icon)
    if (newNode.children?.length)
      newNode.children = traverseTree(newNode.children)

    return newNode
  })
}
</script>

<template>
  <NScrollbar>
    <NMenu
      v-model:expanded-keys="expandedKeys"
      :value="selected"
      :options="options"
      :collapsed="setting.sider.collapsed"
      :collapsed-width="setting.sider.collapsedWidth"
      :collapsed-icon-size="18"
      :icon-size="18"
      :indent="23"
      @update:value="handleSelect"
    />
  </NScrollbar>
</template>
