<script setup lang="ts">
import LayoutMode from './LayoutMode.vue'
import { pageAnimateModeOptions } from '~/settings/theme'

defineProps<{
  show: boolean
}>()

const show = defineModel<boolean>('show')

const mode = useColorMode()
const isDark = computed(() => mode.value === 'dark')
const { setting } = useThemeSetting()

async function handleUpdateValue(val: 'light' | 'dark' | 'auto') {
  mode.value = val
  setting.value.themeMode = val
}
</script>

<template>
  <YDrawer
    v-model:show="show"
    title="主题配置"
    :width="360"
  >
    <NForm
      label-placement="left"
      :show-feedback="false"
      class="[&_.n-form-item]:(my-4px) [&_.n-form-item-blank]:(w-full justify-end)"
    >
      <NDivider class="!mb-20px !mt-0">
        主题模式
      </NDivider>
      <NTabs
        :value="setting.themeMode"
        type="segment"
        class="mb-12px"
        @update:value="handleUpdateValue"
      >
        <NTab name="light">
          <div class="i-icon-park-outline-sun-one text-16px" />
          <div class="ml-4px text-14px">
            明亮
          </div>
        </NTab>
        <NTab name="dark">
          <div class="i-icon-park-outline-moon text-16px" />
          <div class="ml-4px text-14px">
            黑暗
          </div>
        </NTab>
        <NTab name="auto">
          <div class="i-icon-park-outline-intermediate-mode text-16px" />
          <div class="ml-4px text-14px">
            系统
          </div>
        </NTab>
      </NTabs>

      <NDivider class="!my-20px">
        布局模式
      </NDivider>
      <LayoutMode v-model:value="setting.layoutMode" />

      <NDivider class="!my-20px">
        顶栏
      </NDivider>
      <!-- <NFormItem label="显示顶栏">
        <NSwitch v-model:value="setting.header.show" />
      </NFormItem> -->
      <NFormItem label="顶栏高度">
        <NInputNumber
          v-model:value="setting.header.height"
          size="small"
          class="w-140px"
        />
      </NFormItem>
      <NFormItem
        v-if="!isDark"

        label="深色顶栏"
      >
        <NSwitch v-model:value="setting.header.inverted" />
      </NFormItem>

      <template v-if="setting.layoutMode !== 'horizontal-simple'">
        <NDivider class="!my-20px">
          侧边栏
        </NDivider>
        <!-- <NFormItem label="显示侧边栏">
        <NSwitch v-model:value="setting.sider.show" />
      </NFormItem> -->
        <NFormItem label="侧边栏宽度">
          <NInputNumber
            v-model:value="setting.sider.width"
            size="small"
            class="w-140px"
          />
        </NFormItem>
        <NFormItem label="侧边栏折叠宽度">
          <NInputNumber
            v-model:value="setting.sider.collapsedWidth"
            size="small"
            class="w-140px"
          />
        </NFormItem>
        <NFormItem
          v-if="!isDark"
          label="深色侧边栏"
        >
          <NSwitch v-model:value="setting.sider.inverted" />
        </NFormItem>
      </template>

      <NDivider class="!my-20px">
        底栏
      </NDivider>
      <NFormItem label="显示底栏">
        <NSwitch v-model:value="setting.footer.show" />
      </NFormItem>
      <NFormItem label="底栏高度">
        <NInputNumber
          v-model:value="setting.footer.height"
          size="small"
          class="w-140px"
        />
      </NFormItem>
      <NFormItem
        v-if="!isDark"
        label="深色底栏"
      >
        <NSwitch v-model:value="setting.footer.inverted" />
      </NFormItem>

      <NDivider class="!my-20px">
        主题颜色
      </NDivider>
      <NFormItem label="主色">
        <NColorPicker
          v-model:value="setting.themeColor.primaryColor"
          :show-alpha="false"
          class="w-90px"
        />
      </NFormItem>
      <NFormItem label="信息色">
        <NColorPicker
          v-model:value="setting.themeColor.infoColor"
          :show-alpha="false"
          class="w-90px"
        />
      </NFormItem>
      <NFormItem label="警告色">
        <NColorPicker
          v-model:value="setting.themeColor.warningColor"
          :show-alpha="false"
          class="w-90px"
        />
      </NFormItem>
      <NFormItem label="错误色">
        <NColorPicker
          v-model:value="setting.themeColor.errorColor"
          :show-alpha="false"
          class="w-90px"
        />
      </NFormItem>

      <NDivider class="!my-20px">
        深色主题颜色
      </NDivider>
      <NFormItem label="主色">
        <NColorPicker
          v-model:value="setting.darkThemeColor.primaryColor"
          :show-alpha="false"
          class="w-90px"
        />
      </NFormItem>
      <NFormItem label="信息色">
        <NColorPicker
          v-model:value="setting.darkThemeColor.infoColor"
          :show-alpha="false"
          class="w-90px"
        />
      </NFormItem>
      <NFormItem label="警告色">
        <NColorPicker
          v-model:value="setting.darkThemeColor.warningColor"
          :show-alpha="false"
          class="w-90px"
        />
      </NFormItem>
      <NFormItem label="错误色">
        <NColorPicker
          v-model:value="setting.darkThemeColor.errorColor"
          :show-alpha="false"
          class="w-90px"
        />
      </NFormItem>

      <NDivider class="!my-20px">
        页面
      </NDivider>
      <NFormItem label="切换动画">
        <NSwitch v-model:value="setting.page.animate" />
      </NFormItem>
      <NFormItem label="切换动画类型">
        <NSelect
          v-model:value="setting.page.animateMode"
          :options="pageAnimateModeOptions"
          size="small"
          class="w-140px"
        />
      </NFormItem>
      <!-- <NFormItem label="页面加载进度条">
        <NSwitch v-model:value="setting.pageLoadingBar" />
      </NFormItem> -->
    </NForm>
  </YDrawer>
</template>
