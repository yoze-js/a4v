import { useNProgress } from '@vueuse/integrations/useNProgress'

/**
 * 加载进度条
 * @param options 加载进度条设置选项
 */
export function useProgress(options: any = {}) {
  return useNProgress(null, {
    showSpinner: false,
    parent: '#y-progress-wrapper',
    ...options,
  })
}
