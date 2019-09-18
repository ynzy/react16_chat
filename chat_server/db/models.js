/*
使用 mongoose 操作 mongodb 的测试文件
1. 连接数据库
1.1. 引入 mongoose
1.2. 连接指定数据库(URL 只有数据库是变化的)
1.3. 获取连接对象
1.4. 绑定连接完成的监听(用来提示连接成功)
2. 得到对应特定集合的 Model
2.1. 字义 Schema(描述文档结构)
2.2. 定义 Model(与集合对应, 可以操作集合)
3. 通过 Model 或其实例对集合数据进行 CRUD 操作
3.1. 通过 Model 实例的 save()添加数据
3.2. 通过 Model 的 find()/findOne()查询多个或一个数据
3.3. 通过 Model 的 findByIdAndUpdate()更新某个数据
3.4. 通过 Model 的 remove()删除匹配的数据
*/
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat_test');
// 获取连接对象
const conn = mongoose.connection;
conn.on('connected', () => console.log('连接数据库成功'))

// 创建user模型
const userSchema = mongoose.Schema({
  username: { //用户名
    type: String,
    require: true
  },
  password: { //密码
    type: String,
    require: true
  },
  type: { // 用户类型: dashen/laoban
    type: Number,
    /**
     * 1 dashen
     * 2 laoban
     */
    enum: [1, 2],
    require: true
  },
  avatar: {  //avatar
    type: String
  },
  post: {  // 职位
    type: String
  },
  info: {  // g个人或职位简介
    type: String
  },
  company: { //公司名称
    type: String
  },
  salary: {  //工资
    type: String
  },
  created_time: {//创建时间
    type: Date,
    default: Date.now
  },
  last_modified_time: { //最后修改时间
    type: Date,
    default: Date.now
  }
})

const UserModel = mongoose.model('User', userSchema)

exports.User = UserModel

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
