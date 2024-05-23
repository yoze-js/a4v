import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'types/typed-router.d.ts',
      exclude: ['**/components/**'],
    }),

    // Vue must be placed after VueRouter()
    Vue(),

    VueJsx(),

    VueDevTools(),

    Layouts(),

    Unocss(),

    AutoImport({
      dirs: [
        'src/composables/**',
        'src/stores/**',
        'src/utils/**',
      ],
      dts: 'types/auto-imports.d.ts',
      imports: [
        'vue',
        '@vueuse/core',
        'pinia',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'],
        },
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
    }),

    Components({
      dts: 'types/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        ws: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
})
