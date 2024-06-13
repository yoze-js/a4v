import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

const { start, done } = useProgress()

export const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

router.beforeEach((to, from, next) => {
  const { setting } = storeToRefs(useThemeStore())
  const { userInfo } = storeToRefs(useAuthStore())

  if (setting.value.page.loadingBar)
    start()

  if (to.meta.ignoreAuth) {
    next()
    return
  }

  if (!userInfo.value) {
    next({ path: '/login' })
    return
  }

  next()
})

router.afterEach(() => {
  done()
})
