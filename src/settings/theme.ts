export const themeSetting = {
  themeMode: 'auto',
  lightThemeColor: {
    primaryColor: '#18A058',
    infoColor: '#2080F0',
    successColor: '#18A058',
    warningColor: '#F0A020',
    errorColor: '#D03050',
  },
  darkThemeColor: {
    primaryColor: '#63E2B7',
    infoColor: '#70C0E8',
    successColor: '#63E2B7',
    warningColor: '#F2C97D',
    errorColor: '#E88080',
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
