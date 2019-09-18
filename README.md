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