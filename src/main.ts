import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createI18n({
  locale: 'zh-CN',
  messages,
}))

app.mount('#app')
