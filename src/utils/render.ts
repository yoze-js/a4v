/**
 * 渲染图标
 * @param icon 图标名称
 * @param className 样式名称
 * @returns 图标
 */
export function renderIcon(icon: string, className?: string) {
  return h('div', { class: [icon, className] })
}
