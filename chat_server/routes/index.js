var express = require('express');
const md5 = require('blueimp-md5')
var router = express.Router();
const { User, Chat } = require('../db/models')

const filter = { password: 0, __v: 0 } //指定过滤属性

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// 注册路由
router.post('/register', async (req, res, next) => {
  const { username, password, type } = req.body
  // const body = req.body
  // console.log(username,password, type);
  try {
    if (await User.findOne({ username })) {
      res.json({ code: 1, msg: '此用户已存在' })
    }
    req.body.password = md5(md5(password))
    let user = await new User(req.body).save()
    // 生成一个cookie(userid:user._id),并交给浏览器保存
    // 持久化cookie,浏览器会保存在本地文件
    res.cookie('userid', user._id, { maxAge: 1000 * 60 ^ 60 * 24 * 7 })
    res.json({
      code: 0,
      data: {
        _id: user._id,
        username: user.username,
        type: user.type
      }
    })
  } catch (e) {
    console.log(e);
  }
})
// 登录路由
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const body = req.body
  body.password = md5(md5(body.password))
  // 第二个参数是定义过滤属性,此参数大于0的显示,如果不想显示让参数为0,比如:id:0
  let user = await User.findOne(body, filter)
  // console.log(user);
  if (!user) return res.json({ code: 1, msg: '用户名或密码错误' })
  res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 * 7 })
  res.json({ code: 0, data: user })

})

// 更新用户路由
router.post('/update', async (req, res) => {
  // 得到请求cookie 的userid
  const userid = req.cookies.userid
  if (!userid) return res.json({ code: 1, msg: '请先登陆' })
  let user = await User.findByIdAndUpdate({ _id: userid }, req.body)
  // console.log(user);
  // user是数据库中原来的数据
  const { _id, username, type } = user
  // 合并用户信息
  const data = Object.assign(req.body, { _id, username, type })
  console.log(data);
  res.json({ code: 0, data })
})

// 根据cookie 获取对应的user
router.get('/user', async (req, res) => {
  const userid = req.cookies.userid
  if (!userid) return res.json({ code: 1, msg: '请先登陆' })
  let user = await User.findOne({ _id: userid }, filter)
  res.json({ code: 0, data: user })
})

// 查看用户列表
router.get('/list', async (req, res) => {
  const { type } = req.query
  console.log(type);
  if (!type) return res.json({ code: 1, msg: '请传入type值' })
  let users = await User.find({ type })
  if (users) return res.json({ code: 0, data: users })
})

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

module.exports = router;
