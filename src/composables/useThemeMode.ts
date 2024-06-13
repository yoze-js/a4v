export function useThemeMode() {
  const { store: mode } = useColorMode()

  const isDark = computed(() => mode.value === 'dark')

  return {
    mode,
    isDark,
  }
}
