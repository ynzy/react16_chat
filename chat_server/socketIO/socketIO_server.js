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