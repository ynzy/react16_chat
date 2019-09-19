# react实时聊天项目


1. 添加新的数据库集合模型:db/models.js
```js
// 定义 chats集合的文档结构
const chatSchema = mongoose.Schema({
  from: { type: String, required: true }, //发送用户id
  to: { type: String, required: true }, // 接收用户的id
  chat_id: { type: String, required: true }, // from和to组成的字符串
  content: { type: String, required: true }, // 内容
  read: { type: Boolean, default: false }, //标识是否已读
  created_time: { type: Number } //创建时间
})
// 定义能操作chats数据集合的Model
const ChatModel = mongoose.model('chat', chatSchema); // 集合为: chats
// 向外暴露Model
exports.Chat = ChatModel
```
2. 新增路由:routes/index.js
```js
const { User,Chat } = require('../db/models')
// 获取当前用户所有相关聊天信息列表
router.get('/msglist', async (req, res) => {
  // 获取cookie中的userid
  const userid = req.cookies.userid
  // 查询得到所有user文档数组
  let userDocs = await User.find();
  // 用对象存储所有user信息: key为user的_id, val为name和avatar组成的user对象
  const users = {} // 对象容器
  userDocs.forEach(doc => {
    users[doc._id] = { username: doc.username, avatar: doc.avatar }
  })
  /**
   * 查询userid相关的所有聊天信息
   * 参数1: 查询条件
   * 参数2: 过滤条件
   * return 返回查询结果
   */
  let chatMsgs = await Chat.find({ $or: [{ from: userid }, { to: userid }] }, filter);
  console.log(chatMsgs);
  // 返回包含所有用户和当前用户相关的所有聊天的数据
  res.json({ code: 0, data: { users, chatMsgs } })
})

// 修改指定消息为已读
router.post('/readmsg', async (req, res) => {
  // 得到请求中的from和to
  const from = req.body.from
  const to = req.cookies.userid
  /**
   * 更新数据库中chat数据
   * 参数1: 查询条件
   * 参数2: 更新为指定的数据对象
   * 参数3: 是否1次更新多条,默认只更新一条
   * return 更新完成的结果
   */
  let doc = await Chat.update({ from, to, read: false }, { read: true }, { multi: true });
  console.log('/readmsg', doc);
  res.json({ code: 0, data: doc.nModified }) //更新的数据

})
```
3. 使用上socket.io实现实时通信
socketIO/socketIO_server.js
```js
// 启动socket.io服务的函数

module.exports = function (server) {
  // 引入操作chats集合数据的model
  const { Chat } = require('../db/models')
  // 得到操作服务器端sokectIO的io对象
  const io = require('socket.io')(server)

  // 绑定监听回调: 客户端连接上服务器
  io.on('connection', async (socket) => { //socket代表连接
    console.log('有客户端连接上了服务器');
    // 绑定sendMsg监听, 接收客户端发送的消息 
    socket.on('sendMessage', ({ from, to, content }) => {
      console.log('服务器接收到数据', { from, to, content });
      // 将接收到的消息保存到数据库
      const chat_id = [from, to].sort().join('_');
      const created_time = Date.now();
      const ChatModel = new Chat({ chat_id, from, to, created_time, content })
      let chatMsg = ChatModel.save();
      if (chatMsg) {
        // 保存完成后,向所有连接的客户端发送消息
        io.emit('receiveMessage', chatMsg)
        console.log('向所有连接的客户端发送消息', chatMsg)
      }
    })

  })
}
```
bin/www
```js
// 写在var server = http.createServer(app);之后
require('../socketIO/socketIO_server')(server)
```

#### 2.16.4.ajax请求模块:api/index.js
```js
// 请求获取当前用户的所有聊天记录
export const reqChatMsgList = () => ajax('/msglist')
// 标识查看指定用户发送的聊天信息
export const reqReadChatMsg = from => ajax('/readmsg', {from}, 'POST')
```
#### 2.16.5.redux管理状态
1. redux/action-types.js
```js
// 接收消息列表
export const RECEIVE_MSG_LIST = 'receive_msg_list'
// 接收一条消息
export const RECEIVE_MSG = 'receive_msg'
// 标识消息已读
export const MSG_READ = 'msg_read'
```
2. redux/actions.js
```js
import io from 'socket.io-client'

// 接收消息列表的同步action
const receiveMsgList = ({users, chatMsgs, userid}) => ({type: RECEIVE_MSG_LIST,data: {users,chatMsgs,userid}})
// 接收消息同步的action
const receiveMsg = (chatMsg, isToMe) => ({type: RECEIVE_MSG, data: {chatMsg, isToMe}})
// 读取了消息的同步action
const msgRead = ({from,to,count}) => ({type: MSG_READ, data: {from,to,count}})

/**
 * 初始化客户端socketio
 * 1. 连接服务器
 * 2. 绑定用于接收服务器返回chatMsg的监听
 */
function initIO(dispatch, userid) {
    // 1. 创建对象之前: 判断对象是否已经存在, 只有不存在才去创建
  if(!io.socket) {
    // 连接服务器,得到与服务器的连接对象
    io.socket = io('ws://localhost:4000') // 2. 创建对象之后: 保存对象
    // 绑定监听, 接收服务器发送的消息
    io.socket.on('receiveMsg', (chatMsg) => {
      console.log('客户端接收服务器发送的消息', chatMsg)
      // 只有当chatMsg是与当前用户相关的消息, 才去分发同步action保存消息
      // debugger
      if(userid===chatMsg.from || userid===chatMsg.to) {
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
  initIO(dispatch,userid)
  const response = await reqChatMsgList()
  const result = response.data
  if(result.code === 0) {
    const {chatMsgs, users} = result.data
    dispatch(receiveMsgList({chatMsgs, users, userid}))
  }
}

// 发送消息的异步action
export const sendMsg = ({from,to,content}) => {
  return async dispatch => {
    io.socket.emit('sendMsg', {from,to,content})
  }
}

// 更新读取消息的异步action
export const readMsg = userid => {
  return async (dispatch,getState) => {
    const response = await reqReadChatMsg(userid)
    const result = response.data
    if(result.code === 0) {
      const count = result.data
      const from = userid
      const to = getState().user._id
      dispatch(msgRead({from,to,count}))
    }
  }
}
```

3. redux/reducers.js
```js
import { 
  RECEIVE_MSG_LIST, RECEIVE_MSG, MSG_READ
} from "./action-types";

const initChat = {
  chatMsgs: [], // 消息数组 [{from: id1,to: id2}]
  users: {}, // 所有用户的集合对象{id1: user1, id2: user2}
  unReadCount: 0 // 未读消息的数量  
}

// 管理聊天相关信息数据的reducer
function chat(state = initChat, action) {
  switch (action.type) {
    case RECEIVE_MSG:
      const { chatMsg, userid } = action.data
      return {
        chatMsgs: [...state.chatMsgs, chatMsg],
        users: state.users,
        unReadCount: state.unReadCount + (!chatMsg.read && chatMsg.to === userid ? 1 : 0)
      }
    case RECEIVE_MSG_LIST:
      const { chatMsgs, users, userid } = action.data
      return {
        chatMsgs,
        users,
        unReadCount: chatMsgs.reduce((preTotal, msg) => { //别人发给我的未读消息
          return preTotal + (!msg.read && msg.to === userid ? 1 : 0)
        }, 0)
      }
    case MSG_READ:
      const {count, from, to} = action.data
      return {
        chatMsgs: state.chatMsgs.map(msg => {
          if(msg.from === from && msg.to === to && !msg.read) {
            // msg.read = true // 不能直接修改状态
            return {...msg,read: true}
          } else {
            return msg
          }
        }),
        users: state.users,
        unReadCount: state.unReadCount-count
      }
    default:
      return state
  }
}

export default combineReducers({
  chat
})
```

#### 2.16.6. 聊天组件: containers/chat/chat.jsx
1. 动态组件
```js
// 对话聊天组件
import React, { Component } from 'react';
import { NavBar, List, InputItem } from 'antd-mobile'
import { connect } from "react-redux";

import { sendMsg } from "../../redux/actions";

const Item = List.Item

class Chat extends Component {
  state = {
    content: ''
  }
  submit = () => {
    const content = this.state.connect.trim();
    const to = this.props.match.params.userid;
    const from = this.props.user._id;
    this.props.sendMsg({ from, to, content })
    this.setState({ content: '' })
  }
  render() {
    const { user } = this.props
    const { chatMsgs, users } = this.props.chat
    const targetId = this.props.match.params.userid
    if (!users[targetId]) return null
    const meId = user._id
    const chatId = [targetId, meId].sort().join('_')
    const msgs = chatMsgs.filter(msg => msg.chat_id === chatId)
    const targetIcon = users[targetId] ?
      require(`../../assets/images/${users[targetId].avatar}.png`) : null;

    return (
      <div id='chat-page'>
        <NavBar
          className='skick-top'
          icon={<Icon type='left' />}
        >{users[targetId].username}</NavBar>
        <List style={{ marginBottom: 50, marginTop: 50 }}>
          {
            msgs.map(msg => {
              if (msg.from === targetId) {
                return (
                  <Item
                    key={mag._id}
                    thumb={targetIcon}>
                    {msg.content}
                  </Item>
                )
              } else {
                return (
                  <Item
                    key={msg._id}
                    className='chat-me'
                    extra='我'
                  >
                    {msg.content}
                </Item>
                )
              }
            })
          }
        </List>
        <div className='am-tab-bar'>
          <InputItem
            placeholder='请输入'
            value={this.state.connect}
            onChange={val => this.setState({content: val})}
            extra={
              <span onClick={this.submit}>发送</span>
            }
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user, chat: state.chat }),
  { sendMsg }
)(Chat);
```
3. 列表自动滑到底部显示
```js
    componentDidMount() {
    // 初始显示列表
    window.scrollTo(0, document.body.scrollHeight)

  }

  componentDidUpdate () {
    // 更新显示列表
    window.scrollTo(0, document.body.scrollHeight)
  }
```
4. 表情功能
本质就是一个字符文本, 可以作用为字符串直接使用, 各个操作系统能显示
在线可用表情: https://emojipedia.org/
```jsx
  state = {
    content: '',  // 输入聊天的内容
    isShow: false // 是否显示表情列表
  }
  // 在第一次render()之前回调
  componentWillMount() {
    // 初始化表情列表数据
    const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🤩', '😘', '😗', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧']
    this.emojis = emojis.map(emoji => ({ text: emoji }))
  }
// 切换表情列表的显示
  toggleShow = () => {
    const isShow = !this.state.isShow;
    this.setState({ isShow })
    if (isShow) {
      // !异步手动派发resize时间,解决表情列表显示bug
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      });
    }
  }
<div className='am-tab-bar'>
 <InputItem
   placeholder='请输入'
   value={this.state.content}
   onChange={val => this.setState({ content: val })}
   onFocus={() => this.setState({ isShow: false })}
   extra={
     <span>
       <span role="img" onClick={this.toggleShow} style={{ marginRight: 5 }}>😊</span>
       <span onClick={this.handleSend}>发送</span>
     </span>
   }
 />
 {
   this.state.isShow ? (
     <Grid
       data={this.emojis}
       columnNum={8}
       carouselMaxRow={4}
       isCarousel={true}
       onClick={(item) => {
         this.setState({ content: this.state.content + item.text })
       }}
     />
   ) : null
 }
</div>
```