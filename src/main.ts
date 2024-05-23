import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(createRouter({
  history: createWebHistory(),
  extendRoutes: (routes: any) => setupLayouts(routes),
}))

app.mount('#app')
