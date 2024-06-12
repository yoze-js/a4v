<h1 align='center'>
a4v
</h1>

<p align='center'>
快速地<sup><em>a4v</em></sup> 创建 Web 应用
</p>

## 特性

- TypeScript 支持
- Vue3 + Vite 就是快
- NaiveUI 组件自动加载
- 函数自动加载
- VueUse 无需引入直接使用
- 基于文件的路由
- 布局系统
- 使用 Pinia 状态管理
- UnoCSS 原子化 CSS 引擎
- 各种图标集

## 预配置

### UI 框架

- NaiveUI - 一个 Vue 3 组件库
- UnoCSS - 一个高性能且极具灵活性的即时原子化 CSS 引擎

### 图标

- Iconify - 开源的图标库
- UnoCSS - 纯 CSS 图标方案

### 插件

- unplugin-vue-router - 基于文件的路由
- vite-plugin-vue-layouts - 布局系统
- unplugin-auto-import - 自动导入插件
- unplugin-vue-components - 自动导入组件
- vite-plugin-vue-devtools - 旨在增强 Vue 开发者体验的 Vite 插件
- Pinia - 使用 Composition API 的轻便灵活的 Vue 状态管理
- VueUse - 实用的 Composition API 工具合集

## 使用

### 开发

```bash
pnpm dev
```

### 构建

```bash
pnpm build
```

### 更新依赖

```bash
pnpm up
```

### 代码规范检查

```bash
pnpm lint
pnpm lint:fix
```

## 主题

### 主题配置

```ts
const themeSetting = {
  themeMode: 'auto',
  lightThemeColor: {
    primaryColor: '#18A058',
    infoColor: '#2080F0',
    successColor: '#18A058',
    warningColor: '#F0A020',
    errorColor: '#D03050',
  },
  darkThemeColor: {
    primaryColor: '#63e2b7',
    infoColor: '#70c0e8',
    successColor: '#63e2b7',
    warningColor: '#f2c97d',
    errorColor: '#e88080',
  },
  layoutMode: 'vertical',
  header: {
    show: true,
    height: 64,
    inverted: false,
  },
  sider: {
    show: true,
    width: 240,
    collapsedWidth: 64,
    collapsed: false,
    inverted: false,
  },
  footer: {
    show: true,
    height: 64,
    inverted: false,
  },
  page: {
    animate: true,
    animateMode: 'fade-slide',
    loadingBar: true,
  },
}

export const pageAnimateModeOptions = [
  { value: 'fade', label: '淡入淡出' },
  { value: 'fade-slide', label: '滑动' },
  { value: 'fade-top', label: '顶部消退' },
  { value: 'fade-bottom', label: '底部消退' },
]

const { setting } = storeToRefs(useThemeStore())
```

### 主题模式

- 明亮
- 暗黑
- 系统

```ts
const themeStore = useThemeStore()

themeStore.toggleMode('dark') // dark

console.log(themeStore.mode.value) // 'light' | 'dark' | 'auto'
```

### 全局化配置

```ts
const configProviderProps = useNaiveConfigProvider()
```

```html
<NConfigProvider v-bind="configProviderProps"> ... </NConfigProvider>
```

### 脱离上下文的 API

> ⚠️ 请在 router 注册后使用

```ts
const { dialog } = useNaiveApi()
dialog.warning('warning!')
```
