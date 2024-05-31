import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const { loadingBar } = useNaiveApi()

export const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes: any) => setupLayouts(routes),
})

router.beforeEach(() => {
  const { setting } = useThemeSetting()

  if (setting.value.page.loadingBar)
    loadingBar.start()

  return true
})

router.afterEach(() => {
  loadingBar.finish()

  return true
})
