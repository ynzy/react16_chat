import { combineReducers } from "redux"; //合并多个reducer函数

const initState = {
  name: 'zhangsan',
  age: 'lisi'
}

function mainData(state = initState, action) {
  return state
}

function yyy(state = 0, action) {
  return state
}

export default combineReducers({
  mainData,
  yyy
})