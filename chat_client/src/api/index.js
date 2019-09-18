/**
 * 包含n个接口请求函数的模块
 * 每个函数返回的都是promise对象
 */

import ajax from './ajax'

// 注册
export const reqRegister = (user) => ajax('/register', user, 'POST')
// 登录
export const reqLogin = (user) => ajax('/login', user, 'POST')
// 更新用户信息
export const reqUpdateUser = user => ajax('/update', user, 'POST')
// 查看用户信息(根据cookie)
export const reqUser = () => ajax('/user')
// 请求获取用户列表
export const reqUserList = type => ajax('/list', { type })
// 请求获取当前用户的所有聊天记录
export const reqChatMsgList = () => ajax('/msglist')
// 标识查看指定用户发送的聊天信息
export const reqReadChatMsg = from => ajax('/readmsg', { from }, 'POST')