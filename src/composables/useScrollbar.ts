import type { Ref } from 'vue'

export interface ScrollbarOptions {
  /**
   * 滚动到的水平位置
   */
  left?: number
  /**
   * 滚动到的垂直位置
   */
  top?: number
  /**
   * 滚动类型
   */
  behavior?: ScrollBehavior
}

export interface UseScrollbarReturn {
  /**
   * 滚动特定距离
   * @param options 滚动参数
   */
  scrollBy: (options: ScrollbarOptions) => void
  /**
   * 	滚动内容
   * @param options 滚动参数
   */
  scrollTo: (options: ScrollbarOptions) => void
}

/**
 * Naive UI 滚动条
 * @param el 滚动条组件
 */
export function useScrollbar(el: Ref): UseScrollbarReturn {
  function scrollBy(options: ScrollbarOptions): void {
    el.value?.scrollBy({
      behavior: 'smooth',
      ...options,
    })
  }

  function scrollTo(options: ScrollbarOptions): void {
    el.value?.scrollTo({
      behavior: 'smooth',
      ...options,
    })
  }

  return {
    scrollBy,
    scrollTo,
  }
}
