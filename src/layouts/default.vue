<script setup lang="ts">
import Logo from './components/sider/Logo.vue'
import Menu from './components/sider/Menu.vue'
import Breadcrumb from './components/header/Breadcrumb.vue'
import CollapseButton from './components/header/CollapseButton.vue'
import LocaleDropdown from './components/header/LocaleDropdown.vue'
import FullscreenButton from './components/header/FullscreenButton.vue'
import ThemeModeButton from './components/header/ThemeModeButton.vue'
import ThemeSettingButton from './components/header/ThemeSettingButton.vue'
import UserDropdown from './components/header/UserDropdown.vue'

const { isDark, setting } = storeToRefs(useThemeStore())
</script>

<template>
  <YLayout
    :mode="setting.layoutMode?.includes('horizontal') ? 'horizontal' : 'vertical'"
    :show-header="setting.header.show"
    :show-footer="setting.footer.show"
    :show-sider="setting.sider.show && setting.layoutMode !== 'horizontal'"
    :sider-width="setting.sider.width"
    :sider-collapsed-width="setting.sider.collapsedWidth"
    :collapsed="setting.sider.collapsed"
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
    content-class="rounded-tl-12px rounded-bl-12px"
    class="!h-100vh dark:bg-#18181c"
  >
    <template #sider>
      <div class="wh-full flex flex-col">
        <Logo />
        <Menu />
      </div>
    </template>

    <template #header>
      <div class="wh-full flex items-center justify-between">
        <NFlex
          align="center"
          :class="setting.sider.inverted ? 'ml-24px' : 'ml-0'"
          class="transition-300 transition-property-margin"
        >
          <CollapseButton />
          <Breadcrumb />
        </NFlex>
        <NFlex
          align="center"
          class="mr-24px"
        >
          <LocaleDropdown />
          <FullscreenButton />
          <ThemeModeButton />
          <ThemeSettingButton />
          <UserDropdown />
        </NFlex>
      </div>
    </template>

    <div class="wh-full flex flex-col overflow-hidden bg-#f3f3f5 dark:bg-#101014">
      <YRouterView :transition-name="setting?.page.animate ? setting?.page.animateMode : undefined" />
    </div>

    <template #footer>
      <div class="wh-full flex-center">
        footer
      </div>
    </template>
  </YLayout>
</template>
