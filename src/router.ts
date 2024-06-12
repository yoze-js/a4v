import type { LoadingBarApi } from 'naive-ui'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

let loading: LoadingBarApi

router.beforeEach(() => {
  const { setting } = storeToRefs(useThemeStore())

  if (setting.value.page.loadingBar) {
    const { loadingBar } = useNaiveDiscreteApi()
    loading = loadingBar
    loadingBar.start()
  }

  return true
})

router.afterEach(() => {
  loading?.finish()

  return true
})
