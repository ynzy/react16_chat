/**
 * 包含n个工具函数的模块
 */

 /**
  * 注册: laoban --> /laobaninfo
  * 注册: 大神 --> /dasheninfo
  * 登录: laoban --> /laobaninfo 或 /laoban
  * 登录大神 --> /dasheninfo 或 /dashen
  */
export function getRedirectPath(type, avatar) {
  let path = ''

  // 根据type得到path  1:dashen,2:laoban
  path += type === 1 ? '/dashen' : '/laban'
  // 如果没有头像添加info
  if(!avatar) {
    path += 'info'
  }
  return path
}
