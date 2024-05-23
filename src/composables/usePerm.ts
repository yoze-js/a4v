import { isArray } from 'lodash-es'

export interface UsePermReturn {
  /**
   * 检查是否有权限
   * @param array 传入的权限列表
   * @returns 检查结果
   */
  hasPermission: (array: string[]) => boolean
  /**
   * 检查是否包含所有权限
   * @param array 传入的权限列表
   * @returns 检查结果
   */
  hasEveryPermission: (array: string[]) => boolean
  /**
   * 检查是否包含某个权限
   * @param array 传入的权限列表
   * @returns 检查结果
   */
  hasSomePermission: (array: string[]) => boolean
}

/**
 * 权限查询
 * @param list 权限列表
 */
export function usePerm(list: string[]): UsePermReturn {
  function _somePermissions(permissions: string[]) {
    return list.some((item) => {
      return permissions.includes(item)
    })
  }

  function hasPermission(permissions: string[]): boolean {
    if (!permissions?.length)
      return true

    return _somePermissions(permissions)
  }

  function hasEveryPermission(permissions: string[]): boolean {
    if (isArray(permissions))
      return list.every((access: string) => permissions.includes(access))

    throw new Error(`[hasEveryPermission]: ${permissions} 必须是数组`)
  }

  function hasSomePermission(permissions: string[]): boolean {
    if (isArray(permissions))
      return list.some((permission: string) => permissions.includes(permission))

    throw new Error(`[hasSomePermission]: ${permissions} 必须是数组`)
  }

  return {
    hasPermission,
    hasEveryPermission,
    hasSomePermission,
  }
}
