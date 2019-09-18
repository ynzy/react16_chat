/**
 * 包含n个根据老的state 和action 返回新的state的函数的模块
 */
import { combineReducers } from "redux"; //合并多个reducer函数

import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER } from "./action-types";
import { getRedirectPath } from "../utils/index";

const initUser = {
  username: '', //用户名
  type: '', // 类型
  msg: '', // 错误提示信息
  redirectTo: '', //需要自动跳转的路由path
}

function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS: // 认证成功
      const { type, avatar } = action.data
      const redirectTo = getRedirectPath(type, avatar)
      return { ...action.data, redirectTo }
    case ERROR_MSG: //错误信息提示
      return { ...state, msg: action.data }
    case RECEIVE_USER: //接收用户
      return action.data
    case RESET_USER:  // 重置用户
      return { ...initUser, msg: action.data }
    default:
      return state
  }
}

export default combineReducers({
  user
})