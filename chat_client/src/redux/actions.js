/** 包含所有action creator 函数的模块 */
import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER, RECEIVE_USER_LIST, RECEIVE_MSG_LIST, RECEIVE_MSG, MSG_READ } from "./action-types";
import { reqRegister, reqLogin, reqUpdateUser, reqUser, reqUserList, reqChatMsgList, reqReadChatMsg } from "../api/index";
import io from 'socket.io-client'


// 同步错误消息
const errorMsg = msg => ({ type: ERROR_MSG, data: msg })
// 同步成功响应
const authSuccess = user => ({ type: AUTH_SUCCESS, data: user })
// 同步接收用户
const receiveUser = user => ({ type: RECEIVE_USER, data: user })
// 同步重置用户
export const resetUser = msg => ({ type: RESET_USER, data: msg })
// 同步获取用户列表
const receiveUserList = users => ({ type: RECEIVE_USER_LIST, data: users })
// 接收消息列表的同步action
const receiveMsgList = ({ users, chatMsgs, userid }) => ({ type: RECEIVE_MSG_LIST, data: { users, chatMsgs, userid } })
// 接收消息同步的action
const receiveMsg = (chatMsg, isToMe) => ({ type: RECEIVE_MSG, data: { chatMsg, isToMe } })
// 读取了消息的同步action
const msgRead = ({ from, to, count }) => ({ type: MSG_READ, data: { from, to, count } })

// 异步注册
export function register({ username, password, password2, type }) {
  // 进行前台表单验证,如果不合法返回一个同步action对象,显示提示信息
  if (!username || !password || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if (password !== password2) {
    return errorMsg('密码和确认密码不同')
  }
  return async dispatch => {
    // 异步请求ajax, 得到响应
    const response = await reqRegister({ username, password, type })
    const result = response.data
    // 如果是正确的
    if (result.code === 0) {
      getMsgList(dispatch, result.data._id)
      // 分发成功的action
      dispatch(authSuccess(result.data))
    } else {
      // 分发提示错误的action
      dispatch(errorMsg(result.msg))
    }
  }
}

// 异步登录
export const login = ({ username, password }) => {
  if (!username || !password) {
    return errorMsg('用户密码必须输入')
  }
  return async dispatch => {
    // 发送注册的异步ajax请求
    /*const promise = reqLogin(user)
    promise.then(response => {
      const result = response.data  // {code: 0/1, data: user, msg: ''}
    })*/
    const response = await reqLogin({ username, password })
    const result = response.data
    if (result.code === 0) {
      getMsgList(dispatch, result.data._id)
      // 分发授权成功的action
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

// 异步更新用户
export const updateUser = user => {
  return async dispatch => {
    const response = await reqUpdateUser(user)
    const result = response.data
    if (result.code === 0) { // 更新成功
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}

// 异步获取用户
export const getUser = () => {
  return async dispatch => {
    const response = await reqUser()
    const result = response.data
    if (result.code === 0) {
      getMsgList(dispatch, result.data._id)
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}

// 异步获取用户列表
export const getUserList = type => {
  return async dispatch => {
    const response = await reqUserList(type)
    const result = response.data
    if (result.code === 0) {
      dispatch(receiveUserList(result.data))
    }
  }
}

/**
 * 初始化客户端socketio
 * 1. 连接服务器
 * 2. 绑定用于接收服务器返回chatMsg的监听
 */
function initIO(dispatch, userid) {
  // 1. 创建对象之前: 判断对象是否已经存在, 只有不存在才去创建
  if (!io.socket) {
    // 连接服务器,得到与服务器的连接对象
    io.socket = io('ws://localhost:4000') // 2. 创建对象之后: 保存对象
    // 绑定监听, 接收服务器发送的消息
    io.socket.on('receiveMsg', (chatMsg) => {
      console.log('客户端接收服务器发送的消息', chatMsg)
      // 只有当chatMsg是与当前用户相关的消息, 才去分发同步action保存消息
      // debugger
      if (userid === chatMsg.from || userid === chatMsg.to) {
        dispatch(receiveMsg(chatMsg, userid))
      }
    })
  }
}

/**
 * 获取当前用户相关的所有聊天消息列表
 * (在注册/登录/获取用户信息成功后调用)
 */
async function getMsgList(dispatch, userid) {
  initIO(dispatch, userid)
  const response = await reqChatMsgList()
  const result = response.data
  if (result.code === 0) {
    const { chatMsgs, users } = result.data
    dispatch(receiveMsgList({ chatMsgs, users, userid }))
  }
}

// 发送消息的异步action
export const sendMsg = ({ from, to, content }) => {
  return async dispatch => {
    io.socket.emit('sendMsg', { from, to, content })
  }
}

// 更新读取消息的异步action
export const readMsg = userid => {
  return async (dispatch, getState) => {
    const response = await reqReadChatMsg(userid)
    const result = response.data
    if (result.code === 0) {
      const count = result.data
      const from = userid
      const to = getState().user._id
      dispatch(msgRead({ from, to, count }))
    }
  }
}