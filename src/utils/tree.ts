/**
 * 找到所有父级节点
 * @param data - 节点数组
 * @param currentKey - 当前激活节点的 key
 * @param key - 节点 key 的字段名
 * @param nodes - 保存节点的数组
 * @returns 返回所有父级节点
 */
export function findParentNodes(data: any[], currentKey: string, key: string = 'key', nodes: any[] = []) {
  for (const item of data) {
    if (item[key] === currentKey)
      return nodes

    if (item.children) {
      const newNodes = [...nodes, item]
      const result: any = findParentNodes(item.children, currentKey, key, newNodes)
      if (result)
        return result
    }
  }
  return null
}
