<script setup lang="ts">
import LayoutSetting from './components/LayoutSetting.vue'

const router = useRouter()
const mode = useColorMode()
const isDark = computed(() => mode.value === 'dark')
const { setting } = useThemeSetting()

const showSetting = ref(false)

function go(path: string) {
  router.push(path)
}
</script>

<template>
  <YLayout
    :mode="setting.layoutMode.includes('horizontal') ? 'horizontal' : 'vertical'"
    :show-header="setting.header.show"
    :show-footer="setting.footer.show"
    :show-sider="setting.sider.show && setting.layoutMode !== 'horizontal-simple'"
    :sider-width="setting.sider.width"
    :sider-collapsed-width="setting.sider.collapsedWidth"
    :header-height="setting.header.height"
    :footer-height="setting.footer.height"
    :header-class="{
      'bg-#001427 text-#ffffffd1': !isDark && setting?.header.inverted,
    }"
    :sider-class="{
      'bg-#001427 text-#ffffffd1': !isDark && setting?.sider.inverted,
    }"
    :footer-class="{
      'bg-#001427 text-#ffffffd1': !isDark && setting?.footer.inverted,
    }"
    class="!h-100vh dark:bg-#18181c"
  >
    <template #sider>
      <div class="wh-full flex-center">
        <NFlex vertical>
          <NButton @click="go('/')">
            首页
          </NButton>
          <NButton @click="go('/about')">
            关于
          </NButton>
        </NFlex>
      </div>
    </template>

    <template #header>
      <div class="wh-full flex items-center justify-between">
        <div>header</div>
        <NFlex class="mr-24px">
          <div
            :class="{
              'hover:bg-#ffffff17': !isDark && setting?.header.inverted,
            }"
            class="h-40px w-40px flex-center cursor-pointer rounded-3px transition-300 hover:bg-#f3f3f5 dark:hover:bg-#ffffff17"
            @click="showSetting = true"
          >
            <div class="i-icon-park-outline-platte text-16px" />
          </div>
        </NFlex>
      </div>
    </template>

    <div class="wh-full flex flex-col overflow-hidden bg-#f3f3f5 dark:bg-#101014">
      <RouterView #="{ Component, route }">
        <Transition
          appear
          mode="out-in"
          :name="setting?.page.animate ? setting?.page.animateMode : undefined"
        >
          <Component
            :is="Component"
            :key="route.path"
          />
        </Transition>
      </RouterView>
    </div>

    <template #footer>
      <div class="wh-full flex-center">
        Yoze
      </div>
    </template>

    <LayoutSetting v-model:show="showSetting" />
  </YLayout>
</template>
