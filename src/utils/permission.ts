import { isArray, isNumber, isString } from 'lodash-es'

function _somePermissions(list: any[], permissions: any[]) {
  return list.some((item) => {
    return permissions.includes(item)
  })
}

/**
 * 检查是否有权限
 * @param list 权限列表
 * @param permissions 检查的权限列表
 * @returns 检查结果
 */
export function hasPermission(list: any[], permissions: any[] | string | number): boolean {
  let perms: any[] = []

  if (isString(permissions) || isNumber(permissions))
    perms = [permissions]
  else if (isArray(permissions))
    perms = permissions

  return _somePermissions(list, perms)
}

/**
 * 检查是否包含所有权限
 * @param list 权限列表
 * @param permissions 检查的权限列表
 * @returns 检查结果
 */
export function hasEveryPermission(list: any[], permissions: any[] | string | number): boolean {
  if (isArray(permissions))
    return list.every((access: string) => permissions.includes(access))

  throw new Error(`[hasEveryPermission]: ${permissions} 必须是数组`)
}

/**
 * 检查是否包含某个权限
 * @param list 权限列表
 * @param permissions 检查的权限列表
 * @returns 检查结果
 */
export function hasSomePermission(list: any[], permissions: any[] | string | number): boolean {
  if (isArray(permissions))
    return list.some((permission: string) => permissions.includes(permission))

  throw new Error(`[hasSomePermission]: ${permissions} 必须是数组`)
}
