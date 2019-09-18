module.exports = function (server) {
  // 得到IO对象
  const io = require('socket.io')(server)
  // 监视链接(当有一个客户链接上时回调)
  io.on('connection', (socket) => {
    console.log('soketio connected');
    // 绑定 senMsg监听,接收客户端发送的消息
    socket.on('sendMsg', (data) => {
      console.log('服务器接收到浏览器的信息', data);
      // 向客户端发送消息(名称,数据)
      io.emit('receiveMsg', data.name + '_' + data.date)
      console.log('服务器向浏览器发送消息', data);
    })
  })
}