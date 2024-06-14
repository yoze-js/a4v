<script setup lang="ts">
import { menus } from '~/settings/menu'

const route = useRoute()
const router = useRouter()

const breadcrumbs = computed(() => {
  return [
    ...findParentNodes(menus, route.path),
    {
      path: route.path,
      label: route.meta.title,
      icon: route.meta.icon,
    },
  ]
})

function goHome() {
  router.push('/')
}
</script>

<template>
  <NBreadcrumb class="h-32px [&_ul]:flex-center [&_.n-breadcrumb-item\\_\\_separator]:leading-none">
    <NBreadcrumbItem
      v-if="route.path !== '/'"
      @click="goHome"
    >
      <div class="h-24px w-24px flex-center">
        <div class="i-icon-park-outline-home" />
      </div>
    </NBreadcrumbItem>
    <NBreadcrumbItem
      v-for="(item, index) in breadcrumbs"
      :key="index"
      :clickable="false"
    >
      <div class="h-24px flex-center px-4px">
        <div
          v-if="item.icon"
          :class="item.icon"
          class="mr-8px"
        />
        <div>{{ item.label }}</div>
      </div>
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>
