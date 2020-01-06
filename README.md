# 招聘项目-实时聊天

# React全栈项目:实时聊天

## 第 1章:  准备

### 1.1 项目描述

1. 此项目为一个`前后台分离的招聘的 SPA`, 包括前端应用和后端应用
1. 包括`用户注册/登陆, 大神/老板列表, 实时聊天`等模块
1. 前端: 使用 `React 全家桶+ES6+Webpack`等技术
1. 后端: 使用 `Node + express + mongodb + socketIO` 等技术
1. 采用`模块化、组件化、工程化`的模式开发

### 1.2 项目功能界面
![1.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568085676244-ea736f22-2ffb-4d5b-92bd-f356f5fadb38.png#align=left&display=inline&height=241&name=1.png&originHeight=633&originWidth=995&size=193987&status=done&width=379)![2.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568085688040-d139ce53-9a1b-4f64-b4a5-14b5fbc95cda.png#align=left&display=inline&height=245&name=2.png&originHeight=712&originWidth=1061&size=190974&status=done&width=365)
![3.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568085714595-eff36424-009b-47c2-b3b5-c1e9a6634a4a.png#align=left&display=inline&height=238&name=3.png&originHeight=671&originWidth=1062&size=171797&status=done&width=377)![4.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568085739632-a1e1a4d3-9582-4669-b434-4b629b82eb40.png#align=left&display=inline&height=310&name=4.png&originHeight=738&originWidth=768&size=234034&status=done&width=323)
### 1.3 技术选型
![snipaste20190910_113555.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568086712348-98abaa25-fa5d-44a1-aa59-822cde918d11.png#align=left&display=inline&height=578&name=snipaste20190910_113555.png&originHeight=730&originWidth=551&size=46366&status=done&width=436)
### 1.4 前端路由
![snipaste20190910_114657.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568087245268-4bef8456-986e-45b2-a447-03589c5f6414.png#align=left&display=inline&height=536&name=snipaste20190910_114657.png&originHeight=657&originWidth=482&size=47579&status=done&width=393)
### 1.5 API接口
![snipaste20190910_115120.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568087511728-79a0cd46-6620-4b59-8bd5-42eeea1236a1.png#align=left&display=inline&height=374&name=snipaste20190910_115120.png&originHeight=489&originWidth=521&size=28901&status=done&width=398)
### 1.6 目标
#### 1.6.1 流程及开发方法

1. 熟悉一个项目的`开发流程`
1. 学会`模块化,组件化,工程化`的开发模式
1. 掌握使用`create-react-app` 脚手架初始化react项目开发
1. 使用`node + express + mongoose + MongoDB`搭建后台开发
#### 1.6.2 React 插件或第三方库

1. 使用`react-router-dom`开发单页应用
1. 使用 `axios `与后端进行数据交互
1. 使用` redux+react-redux + redux-thunk` 管理应用组件装填
1. 使用` antd-mobile `组件库构建界面
1. 使用` mongoose` 操作 MongoDB 数据库
1. 使用 `express`搭建后台路由
1. 使用 `socket.io`实现实时通信
1. 使用 `blueimp-md5`对密码进行MD5加密处理
1. 学会使用`js-cookies`操作浏览器端cookie数据
### 1.7 npm 常用命令

```shell
npm init // 初始化当前应用包,生成package.json
npm install // 根据package.json 下载所有依赖包
npm install packageName --save //下载某个运行时依赖包
npm install packageName --save-dev // 下载谋改革开发编译期依赖包
npm install packageName -g // 全局下载某个依赖包
npm install packageName@version // 下载指定版本的某个依赖包
npm info packageName // 查看某个包所有远程仓库中的相关信息
npm rm packageName --save // 移出已下载的运行依赖包
npm rm packageName --save-dev // 移除已下载的开发依赖包
npm list //查看安装的所有的包
npm help // 查看命令的详细帮助
npm run xxx // 执行package.json的scripts中的配置命令
npm root -g // 查看全局下载目录
```

## 第2章: 应用开发详解
### 2.1 开启项目开发
#### 2.1.1使用create-react-app脚手架搭建项目

1. create-react-app 是 react 官方提供的用于搭建基于 react+webpack+es6 项目的脚手架
1. 操作

```shell
npx create-react-app gzhipin
cd gzhipin 
yarn start 
访问: localhost:3000
```
#### 2.1.2**编码测试与打包发布项目 **

1. 编码测试
```shell
npm start 
访问: http://localhost:3000 
编码, 自动编译打包刷新(live-reload), 查看效果
```

2. 打包发布

```shell
npm install -g serve 
serve build 
访问: http://localhost:5000
```
### 2.2 项目结构

```javascript
|--src            // 客户端代码文件夹
|--|--api					// ajax请求相关模块文件夹
|--|--assets			// 共用资源文件夹
|--|--components	// UI组件模块文件夹
|--|--containers  // 容器组件模块文件夹
|--|--redux       // redux相关模块文件夹
|--|--utils       // 工具模块文件夹
|--|--index.js    // 入口js
```
### 2.3 引入ant-mobile
#### 2.3.1下载组件库包
```shell
npm install antd-mobile --save
```
#### 2.3.2 处理3秒延迟,index.html
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
  if(!window.Promise) {
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
  }
</script>
```
#### 2.3.3 组件按需打包

1. 下载依赖包
```shell
yarn add react-app-rewired customize-cra --dev
yarn add babel-plugin-import --dev
```

2. 在项目根目录创建一个 config-overrides.js 用于修改默认配置
```javascript
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
);
```

3. 修改配置:package.json
```javascript
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test --env=jsdom",
"eject": "react-scripts eject"
```

4. 在应用中使用antd组件
```javascript
import React from 'react';
import './App.css';
import { Button } from 'antd-mobile';

function App() {
  return (
    <div className="App">
      <Button type="primary">primary</Button>
    </div>
  );
}

export default App;

```
### 2.4.4 应用中使用的组件
![snipaste20190911_151600.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568186177331-dbca2f36-0e75-4bbf-9338-ae4102132d73.png#align=left&display=inline&height=581&name=snipaste20190911_151600.png&originHeight=796&originWidth=616&size=79776&status=done&width=450)
#### 2.4.5 自定义主题

1. 目标: 改变主题背景颜色
1. 下载依赖模块
> **注意:** less要下载2.7.3指定的版本,不然会报错,原因未知

```shell
yarn add --dev babel-plugin-import less@2.7.3 less-loader style-loader css-loader
```

3. 创建them,json文件,用于修改主题颜色
```javascript
{ 
  "@brand-primary": "#881cae", 
  "@brand-primary-tap": "#a341c5"
}
```

4. 配置`config-overrides.js`文件
-  config-overrides.js中 style：‘css’ 改为 style：true
- 添加addLessLoader的配置
```javascript
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const theme = require("./them.json");
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    modifyVars: theme
  })
);
```
### 2.5 引入路由

1. 下载依赖包
```shell
yarn add react-router-dom
```

2. 路由组件:** containers/register/register.jsx**

```jsx
import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        注册
      </div>
    )
  }
}

```

3. 路由组件:** containers/login/login.jsx**

```jsx
import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        登录
      </div>
    )
  }
}
```

4. 路由组件: **containers/main/main.jsx**

```jsx
import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div>
       主体页面
      </div>
    )
  }
}

```

5. 映射路由:**index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom";

import Login from './containers/login/login';
import Register from './containers/register/register';
import Main from './containers/main/main';

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route component={Main}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'));
```
### 2.6 引入redux

1. 下载相关依赖包
```shell
yarn add redux react-redux redux-thunk
yarn add redux-devtools-extension --dev
```

2. **. reducers: redux/reducers.js **

```javascript
/*包含多个用于生成新的 state 的 reducer 函数的模块 */
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
```

3. **store: redux/store.js**

```javascript
/* redux 最核心的 store 对象模块 */
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; // redux异步中间件
import { composeWithDevTools } from 'redux-devtools-extension';
 import reducers from './reducers';
export default createStore(
  reducers, 
  composeWithDevTools(
  applyMiddleware(thunk)
))
```

4. **入口JS: index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";

import store from './redux/store'
import Login from './containers/login/login';
import Register from './containers/register/register';
import Main from './containers/main/main';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={Main} />
      </Switch>
    </HashRouter>
  </Provider>

), document.getElementById('root'));

```

5. 使用:**containers/main/main.jsx**

```jsx
import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
class Main extends Component {

  static propTypes = {
    mainData: PropTypes.object.isRequired
  }

  render() {
    const { mainData } = this.props
    return (
      <div>
       主体页面
       {mainData.name}
       {mainData.age}
      </div>
    )
  }
}

export default connect(
  state => ({mainData: state.mainData}), 
)(Main)
```
### 2.7 登录/注册界面
#### Logo组件:  components/logo/logo.jsx
```jsx
import React, { Component } from 'react'

import logo from "./logo.png";
import './logo.less'
export default class Logo extends Component {
  render() {
    return (
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo-img' />
      </div>
    )
  }
}
```

```less
// components/logo/logo.less
.logo-container {
  text-align: center;
}
```
#### 注册组件: containers/register/register.jsx
```jsx

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button } from "antd-mobile";
import Logo from '../../components/logo/logo';

const ListItem = List.Item
export default class Register extends Component {
  state = {
    username: '',  // 用户名
    password: '',  // 密码
    password2: '',  // 确认密码
    type: 'laoban',  // 用户类型名称   dashen/laoban
  }
  // 处理输入框/单选框变化,收集数据到state
  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }
  // 注册
  register = () => {
    console.log(this.state);

  }
  // 跳转到login路由
  toLogin = () => {
    this.props.history.replace('/login')
  }
  render() {
    const { type } = this.state
    return (
      <div>
        <NavBar>雨凡聊天室</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem clear placeholder='输入用户名' onChange={val => this.handleChange('username', val)} > 用户名:</InputItem>
            <InputItem clear type='password' placeholder='请输入密码' onChange={val => this.handleChange('password', val)} >密码:</InputItem>
            <InputItem clear type='password' placeholder='请输入确认密码' onChange={val => this.handleChange('password2', val)} >确认密码:</InputItem>
            <ListItem>
              <span style={{ marginRight: 30 }}>用户类型:</span>
              <Radio style={{ marginRight: 30 }} checked={type === 'dashen'} onClick={() => this.handleChange('type', 'dashen')} >大神</Radio>
              <Radio checked={type === 'laoban'} onClick={() => this.handleChange('type', 'laoban')} >老板</Radio>
            </ListItem>
            <WhiteSpace />
            <Button style={{ width: '60%', margin: '0 auto' }} type="primary" onClick={this.register}>注册</Button>
            <WhiteSpace />
            <Button onClick={this.toLogin}>已有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
```
####  登录组件:  containers/login/login.jsx

```jsx
import React, { Component } from 'react'
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Button } from "antd-mobile";

import Logo from '../../components/logo/logo';

export default class Login extends Component {
  state = {
    username: '',  // 用户名
    password: '',  // 密码
  }
  // 处理输入框/单选框变化,收集数据到state
  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }
  // 登录
  login = () => {
    console.log(this.state);

  }
  // 跳转到register路由
  toRegister = () => {
    this.props.history.replace('/register')
  }
  render() {
    return (
      <div>
        <NavBar>雨凡聊天室</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem clear placeholder='输入用户名' onChange={val => this.handleChange('username', val)} > 用户名:</InputItem>
            <InputItem clear type='password' placeholder='请输入密码' onChange={val => this.handleChange('password', val)} >密码:</InputItem>
            <WhiteSpace />
            <Button style={{ width: '60%', margin: '0 auto' }} type="primary" onClick={this.login}>登录</Button>
            <WhiteSpace />
            <Button onClick={this.toRegister}>已有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

```
### 2.8 搭建后台应用

1. 使用webstorm,创建 node+ express 应用,使用`ejs`模板

![QQ截图20190912103003.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568255433142-c112dfbb-a7dd-4b5f-a2ef-8549c52300cc.png#align=left&display=inline&height=349&name=QQ%E6%88%AA%E5%9B%BE20190912103003.png&originHeight=349&originWidth=552&size=108345&status=done&width=552)

2. 后台应用结构
```javascript
|--bin
|--|--www  //修改端口
|--db      //数据库操作
|--public	 // 公共资源
|--routes  // 注册路由
|--|--index.js
|--|--users.js
|--views  // 视图资源
|--app.js //入口文件
```

3. 启动项目
- 修改package.json

全局安装nodemon热更新

```shell
yarn add nodemon -g
```

```json
 // package.json
"scripts": {
    "start": "nodemon ./bin/www"
  },
```

- 修改 bin/www

```javascript
var port = normalizePort(process.env.PORT || '4000');
function onListening() {
  console.log(`启动服务,地址:http://localhost:${port}/`);
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
```

- 启动项目:`yarn start`
- 访问: [http://localhost:4000/](http://localhost:4000/)
4. 路由接口测试

注册新路由:routes/index.js

```javascript
router.post('/register',(req, res, next) => {
  const {username,password} = req.body
  console.log(username,password);
  if(username === 'admin') {
    res.json({code: 1,msg: '此用户已存在'})
  }else {
    res.json({code:0, data:{
      _id: '1',
      username,
      password
    }})
  }
})
```
![QQ截图20190912112120.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568258502814-bcd464be-8340-43bc-ba1c-bcc60c408295.png#align=left&display=inline&height=294&name=QQ%E6%88%AA%E5%9B%BE20190912112120.png&originHeight=566&originWidth=906&size=32554&status=done&width=470)

### 2.9 使用mongoose操作数据库
#### 2.9.1 下载依赖包
 `yarn add mongoose blueimp-md5`
#### 2.9.2 创建user数据模型

```javascript
// db/user.js
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
conn.on('connected',()=>console.log('连接数据库成功'))

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
    enum: [1,2],
    require: true
  },
  header: {  //avatar
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

const UserModoel = mongoose.model('User',userSchema)

module.exports = UserModoel
```
### 2.10 注册/登录后台处理
路由器模块:

```javascript
var express = require('express');
const md5 = require('blueimp-md5')
var router = express.Router();
const User = require('../db/user')

const filter = {password: 0, __v:0} //指定过滤属性

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 注册路由
router.post('/register',async (req, res, next) => {
  const {username,password, type} = req.body
  // const body = req.body
  // console.log(username,password, type);
  try {
    if(await User.findOne({username})) {
      res.json({code: 1,msg: '此用户已存在'})
    }
    req.body.password = md5(md5(password))
    let user = await new User(req.body).save()
    // 生成一个cookie(userid:user._id),并交给浏览器保存
    // 持久化cookie,浏览器会保存在本地文件
    res.cookie('userid', user._id,{maxAge: 1000*60^60*24*7})
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
router.post('/login',async (req,res)=> {
  const {username, password } = req.body
  const body = req.body
  body.password = md5(md5(body.password))
  // 第二个参数是定义过滤属性,此参数大于0的显示,如果不想显示让参数为0,比如:id:0
  let user = await User.findOne(body,filter)
  // console.log(user);
  if(!user) return res.json({code: 1, msg: '用户名或密码错误'})
  res.cookie('userid', user._id, {maxAge: 1000*60^60*24*7})
  res.json({code: 0, data: user})
  
})
module.exports = router;

```

- 使用postman测试接口数据

![QQ截图20190912144305.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568270597148-234e5d60-ad8a-4808-9a83-9fb78602716e.png#align=left&display=inline&height=219&name=QQ%E6%88%AA%E5%9B%BE20190912144305.png&originHeight=605&originWidth=989&size=44480&status=done&width=358)![QQ截图20190912144358.png](https://cdn.nlark.com/yuque/0/2019/png/243804/1568270649519-03d92632-c8dc-47bc-87d9-22a430da805f.png#align=left&display=inline&height=217&name=QQ%E6%88%AA%E5%9B%BE20190912144358.png&originHeight=614&originWidth=995&size=48631&status=done&width=352)
### 2.11 注册登录前台处理
#### 2.11.1 下载依赖包
`yarn add axios`
#### 2.11.2 封装axios请求
```javascript
// api/ajax.js
import axios from 'axios'
export default function ajax(url = '',data = {}, type = 'GET') {
  if (type === 'GET') {
    // 准备url query参数数据
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += `${key}=${data[key]}&`
    })
    if(dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
    return axios.get(url)
  }else {
    // 发送post请求
    return axios.post(url,data) // data: 包含请求体数据的对象
  }
}
```

```javascript
// api/index.js
/**
 * 包含n个接口请求函数的模块
 * 每个函数返回的都是promise对象
 */

import ajax from './ajax'

// 注册
export const reqRegister = (user) => ajax('/register', user, 'POST')
// 登录
export const reqLogin = (user) => ajax('/login', user, 'POST')
```

- 配置ajax请求代理,package.json

```json
"proxy": "http://localhost:4000"
```
#### 2.11.3 使用redux管理用户信息

1. redux/action-types.js

```javascript
/** 包含所有action的type常量名的模块 */
// 验证成功
export const AUTH_SUCCESS = 'auth_success'
// 请求出错
export const ERROR_MSG = 'error_msg'
```

2. redux/actions.js
```javascript
/** 包含所有action creator 函数的模块 */
import { AUTH_SUCCESS, ERROR_MSG } from "./action-types";
import { reqRegister, reqLogin } from "../api/index";

// 同步错误消息
const errorMsg = msg => ({type: ERROR_MSG, data: msg})
// 同步成功响应
const authSuccess = user => ({type: AUTH_SUCCESS, data: user})

// 异步注册
export function register({username, password, password2, type}) {
  // 进行前台表单验证,如果不合法返回一个同步action对象,显示提示信息
  if(!username || !password || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if(password !== password2) {
    return errorMsg('密码和确认密码不同')
  }
  return async dispatch => {
    // 异步请求ajax, 得到响应
    const response = await reqRegister({username, password, type})
    const result = response.data
    // 如果是正确的
    if(result.code === 0) {
      // 分发成功的action
      dispatch(authSuccess(result.data))
    }else {
      // 分发提示错误的action
      dispatch(errorMsg(result.msg))
    }
  }
}

// 异步登录
export const Login = ({username,password}) => {
  if(!username || !password) {
    return errorMsg('用户密码必须输入')
  }
  return async dispatch => {
    const response = await reqLogin({username,password})
    const result = response.data
    if(result.code === 0) {
      dispatch(authSuccess(result.data))
    }else {
      dispatch(errorMsg(result.msg))
    }
  }
}
```

3. redux/reducers.js

```javascript
/**
 * 包含n个根据老的state 和action 返回新的state的函数的模块
 */
import { combineReducers } from "redux"; //合并多个reducer函数

import { AUTH_SUCCESS, ERROR_MSG } from "./action-types";


const initUser = {
  username: '', //用户名
  type: '', // 类型
  msg: '', // 错误提示信息
  redirectTo: '', //需要自动跳转的路由path
}

function user(state = initUser, action) {
  
  switch (action.type){
    case AUTH_SUCCESS: // 认证成功
      return {...action.data, redirectTo:'/'}
    case ERROR_MSG: //错误信息提示
      return {...state,msg: action.data}
    default: 
      return state
  }
}

export default combineReducers({
  user
})
```
#### 2.11.4 注册组件:register.jsx

```javascript
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button } from "antd-mobile";
import Logo from '../../components/logo/logo';
import { register } from "../../redux/actions";
const ListItem = List.Item
class Register extends Component {
  state = {
    username: '',  // 用户名
    password: '',  // 密码
    password2: '',  // 确认密码
    type: 1,  // 用户类型名称   1:dashen,2:laoban
  }
  // 处理输入框/单选框变化,收集数据到state
  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }
  // 注册
  register = () => {
    console.log(this.state);
    this.props.register(this.state)
  }
  // 跳转到login路由
  toLogin = () => {
    this.props.history.replace('/login')
  }
  render() {
    const { type } = this.state
    const { redirectTo, msg} = this.props
    if(redirectTo) {
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar>雨凡聊天室</NavBar>
        <Logo />
        <WingBlank>
         {msg ? <p className='error-msg'>{msg}</p> : null}
          <List>
            <InputItem clear placeholder='输入用户名' onChange={val => this.handleChange('username', val)} > 用户名:</InputItem>
            <InputItem clear type='password' placeholder='请输入密码' onChange={val => this.handleChange('password', val)} >密码:</InputItem>
            <InputItem clear type='password' placeholder='请输入确认密码' onChange={val => this.handleChange('password2', val)} >确认密码:</InputItem>
            <ListItem>
              <span style={{ marginRight: 30 }}>用户类型:</span>
              <Radio style={{ marginRight: 30 }} checked={type === 1} onClick={() => this.handleChange('type', 1)} >大神</Radio>
              <Radio checked={type === 2} onClick={() => this.handleChange('type', 2)} >老板</Radio>
            </ListItem>
            <WhiteSpace />
            <Button style={{ width: '60%', margin: '0 auto' }} type="primary" onClick={this.register}>注册</Button>
            <WhiteSpace />
            <Button onClick={this.toLogin}>已有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => state.user,
  {register}
)(Register)
```
#### 2.11.5 登录组件: login.jsx

```jsx
import React, { Component } from 'react'
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Button } from "antd-mobile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Logo from '../../components/logo/logo';
import { login } from "../../redux/actions";
 class Login extends Component {
  state = {
    username: '',  // 用户名
    password: '',  // 密码
  }
  // 处理输入框/单选框变化,收集数据到state
  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }
  // 登录
  login = () => {
    console.log(this.state);
    this.props.login(this.state)
  }
  // 跳转到register路由
  toRegister = () => {
    this.props.history.replace('/register')
  }
  render() {
    const { redirectTo, msg} = this.props
    if(redirectTo) {
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar>雨凡聊天室</NavBar>
        <Logo />
        <WingBlank>
        {msg ? <p className='error-msg'>{msg}</p> : null}
          <List>
            <InputItem clear placeholder='输入用户名' onChange={val => this.handleChange('username', val)} > 用户名:</InputItem>
            <InputItem clear type='password' placeholder='请输入密码' onChange={val => this.handleChange('password', val)} >密码:</InputItem>
            <WhiteSpace />
            <Button style={{ width: '60%', margin: '0 auto' }} type="primary" onClick={this.login}>登录</Button>
            <WhiteSpace />
            <Button onClick={this.toRegister}>已有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect (
  state => state.user,
  {login}
)(Login)
```
### 2.12 实现user信息完善功能
#### 2.12.1 下载相关依赖包
`yarn add js-cookie`
#### 2.12.2注册/登录成功的路由跳转

1. 工具模块: utils/index.js

```javascript
/**
 * 包含n个工具函数的模块
 */

 /**
  * 注册: laoban --> /laobaninfo
  * 注册: 大神 --> /dasheninfo
  * 登录: laoban --> /laobaninfo 或 /laoban
  * 登录大神 --> /dasheninfo 或 /dashen
  */
export function getRedirectPath(type, avatar) {
  let path = ''

  // 根据type得到path  1:dashen,2:laoban
  path += type === 1 ? '/dashen' : '/laban'
  // 如果没有头像添加info
  if(!avatar) {
    path += 'info'
  }
  return path
}
```

2. reducers 中使用工具: redux/reducers.js

```javascript
import { getRedirectPath } from "../utils/index";    
case AUTH_SUCCESS: // 认证成功
  const redirectTo = getRedirectPath(action.data.type, action.data.avatar)
  return {...action.data, redirectTo}
```
####  2.12.3 后台路由: routes/index.js

```javascript
// 更新用户路由
router.post('/update',async (req, res) => {
  // 得到请求cookie 的userid
  const userid = req.cookies.userid
  if(!userid) return res.json({code:1,msg: '请先登陆'}) 
  let user = await User.findByIdAndUpdate({_id:userid}, req.body)
  // user是数据库中原来的数据
  const {_id, username, type} = user
  // 合并用户信息
  const data = Object.assign(req.body, {_id, username, type})
  res.json({code: 0, data})
})
```
#### 2.12.4 前台更新用户的ajax请求

```javascript
//api/index.js
// 更新用户信息
export const reqUpdateUser = user => ajax('/update', user, 'POST')
```
#### 2.12.5 redux 更新状态

1. redux/action-types.js

```javascript
// 接收用户
export const RECEIVE_USER = 'receive_user'
// 重置用户
export const TESET_USER = 'teset_user'
```

2. redux/actions.js

```javascript
import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER } from "./action-types";
import { reqRegister, reqLogin, reqUpdateUser } from "../api/index";

// 同步接收用户
const receiveUser = user => ({type: RECEIVE_USER, data: user})
// 同步重置用户
export const resetUser = msg => ({type: RESET_USER, data: msg})

// 异步更新用户
export const updateUser = user => {
  return async dispatch => {
    const response = await reqUpdateUser(user)
    const result = response.data
    if(result.code === 0) { // 更新成功
      dispatch(receiveUser(result.data))
    }else {
      dispatch(resetUser(result.msg))
    }
  }
}
```

3. redux/reducers.js

```javascript
import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER } from "./action-types";

function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS: // 认证成功
      const redirectTo = getRedirectPath(action.data.type, action.data.avatar)
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
```
#### 2.12.6 用户头像选择组件

1. 添加多个头像图片文件: assets/images
1. 组件 components/header-selector/header-selector.jsx

```jsx
import React, { Component } from 'react'
import { List, Grid } from 'antd-mobile';
import { PropTypes } from "prop-types";

export default class HeaderSelector extends Component {
  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }
  state = {
    icon: null
  }
  constructor(props) {
    super(props)
    this.headerList = []
    for (let i = 0; i < 20; i++) {
      const text = `头像${i+1}`
      this.headerList.push({text, icon: require(`../../assets/imgs/${text}.png`)})
    }
  }
  selectHeader = ({icon, text}) => {
    // 更新当前组件状态
    this.setState({icon})
    // 更新父组件的状态
    this.props.setHeader(text)
  }
  render() {
    const {icon } = this.state
    const gridHeader = icon 
    ? <p>已选择头像:<img src={icon} alt='avator'/></p> 
    :'请选择头像';
    return (
      <div>
        <List renderHeader={() => gridHeader}>
        <Grid 
        data={this.headerList}
        columnNum = {5} 
        hasLine={false}
        onClick={this.selectHeader}
        />
        </List>
      </div>
    )
  }
}
```
#### 2.12.7 老板信息完善组件
组件: containers/laoban-info/laoban-info.jsx

```javascript
import React, { Component } from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import HeaderSelector from '../../components/header-selector/header-selector';
import { updateUser } from "../../redux/actions";
class LaobanInfo extends Component {
  state = {
    avator: '', //头像
    info: '', //职位简介
    post: '', //职位名称
    company: '', // 公司名称
    salary: '' //工资
  }
  handleChange = (name, val) => {
    this.setState({ [name]: val })
  }
  setHeader = avator => {
    this.setState({ avator })
  }
  render() {
    const { user } = this.props
    // 如果信息已完善,自动跳转到laoban主界面
    if (user.avator) {
      return <Redirect to='/laoban' />
    }
    return (
      <div>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader} />
        <InputItem onChange={val => this.handleChange('post', val)} >招聘职位:</InputItem>
        <InputItem onChange={val => this.handleChange('company', val)} >公司名称:</InputItem>
        <InputItem onChange={val => this.handleChange('salary', val)} >职位薪资:</InputItem>
        <TextareaItem
          title="职位要求"
          rows={3}
          onChange={val => this.handleChange('info', val)}
        />
        <WhiteSpace />
        <Button type="primary" onClick={() => this.props.updateUser(this.state)}>保存</Button>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { updateUser },
)(LaobanInfo)
```
#### 2.12.8 **大神信息完善组件**:containers/dashen-info/dashen-info.jsx

```jsx
import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import HeaderSelector from '../../components/header-selector/header-selector';
import { updateUser } from "../../redux/actions";
class DashenInfo extends Component {
  state = {
    avator: '', //头像
    info: '', //个人简介
    post: '', //求职岗位
  }
  handleChange = (name, val) => {
    this.setState({ [name]: val })
  }
  setHeader = avator => {
    this.setState({ avator })
  }
  render() {
    const { user } = this.props
    // 如果信息已完善,自动跳转到dashen主界面
    if (user.avator) {
      return <Redirect to='/dashen' />
    }
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader} />
        <InputItem onChange={val => this.handleChange('post', val)} >求职岗位:</InputItem>
        <TextareaItem
          title="个人介绍"
          rows={3}
          onChange={val => this.handleChange('info', val)}
        />
        <WhiteSpace />
        <Button type="primary" onClick={() => this.props.updateUser(this.state)}>保存</Button>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { updateUser },
)(DashenInfo)
```
#### 2.12.9 main**组件**:containers/main/main.jsx

```jsx
import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Cookies from 'js-cookie'

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
export default class Main extends Component {

  render() {
    const userid = Cookies.get('userid')
    if(!userid) {
      this.props.history.replace('/login')
      return null
    }
    return (
      <div>
        <Switch>
          <Route path='/laobaninfo' component={LaobanInfo} />  
          <Route path='/dasheninfo' component={DashenInfo} />  
        </Switch>   
      </div>
    )
  }
}
```
### 2.13 搭建整体界面
#### 2.13.1 后台路由:routes/index.js

```javascript
// 根据cookie 获取对应的user
router.get('/user', async (req, res) => {
  // 取出cookie的userid
  const userid = req.cookies.userid
  if (!userid) return res.json({ code: 1, msg: '请先登陆' })
  // 查询对应的user
  let user = await User.findOne({ _id: userid }, filter)
  res.json({ code: 0, data: user })
})
```
#### 2.13.2 **ajax 请求模块: api/index.js**
```javascript
// 查看用户信息(根据cookie)
export const reqUser = () => ajax('/user')
```
#### 2.13.3 **redux 管理状态**

1. redux/actions.js

```javascript
// 异步获取用户
export const getUser = () => {
  return async dispatch => {
    const response = await reqUser()
    const result = response.data
    if(result.code === 0) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}
```
#### **2.13.4. main 路由的子路由 **

1. containers/laoban/laoban.jsx 

```jsx
// 老板的主路由组件
import React, { Component } from 'react'

export default class Laoban extends Component {
  render() {
    return (
      <div>
        老板列表
      </div>
    )
  }
}

```

2. containers/dashen/dashen.jsx

```jsx
// 大神的主路由组件
import React, { Component } from 'react'

export default class Dashen extends Component {
  render() {
    return (
      <div>
        大神列表
      </div>
    )
  }
}
```

3. containers/message/message.jsx

```jsx
// 对话消息列表组件
import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div>
        message列表
      </div>
    )
  }
}

```

4. containers/personal/personal.jsx

```jsx
// 用户个人中心路由组件
import React, { Component } from 'react'

export default class Personal extends Component {
  render() {
    return (
      <div>
        个人中心
      </div>
    )
  }
}
```

5. components/not-found/not-found.jsx

```jsx
//提示找不到页面的UI路由组件
import React, { Component } from 'react';
import { Button, WhiteSpace } from "antd-mobile";
class NotFound extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>抱歉,找不到页面!</h2>
          <WhiteSpace />
          <Button type="primary"
            onClick={() => this.props.history.replace("/")}
          >回到首页</Button>
        </div>
      </div>
    );
  }
}

export default NotFound;
```
#### 2.13.5**底部导航组件**

1. 组件:components/nav-footer/nav-footer.jsx
```jsx
// 底部导航的UI组件
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
const Item = TabBar.Item
class NavFooter extends Component {

  static propTypes = {
    navList: PropTypes.array.isrequired
  }
  render() {
    // nav.hisde = true/fasls hide 代表当前项应该被隐藏
    const navList = this.props.navList.filter(nav => !nav.hide) // 回调函数返回值为true,当前元素就留下,否则不留
    // 当前的请求路径
    const {pathname} = this.props.location
    return (
      <TabBar>
        {
          navList.map((nav, index) => (
            <Item key= {nav.path}
                  title={nav.path}
                  icon={{uri:require(`./imgs/${nav.icon}.png`)}}
                  selectedIcon={{uri:require(`./imgs/${nav.icon}-selected.png`)}}
                  selected={pathname===nav.path}
                  onPress={()=>{
                    this.props.history.replace(nav.path)
                  }}
            />
          ))
        }
      </TabBar>
    );
  }
}

export default withRouter(NavFooter);  //! 让非路由组件可以访问到路由组件的API
```
##### import { withRouter } from "react-router-dom";//! 让非路由组件可以访问到路由组件的API
#### 2.13.6.**应用主界面路由组件**

```jsx
import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie'
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Dashen from '../dashen/dashen'
import Laoban from '../laoban/laoban'
import Message from '../message/message'
import Personal from '../personal/personal'
import NotFound from '../../components/not-found/not-found'
import NavFooter from '../../components/nav-footer/nav-footer'

import { getUser } from '../../redux/actions'
import { getRedirectPath } from '../../utils'

class Main extends Component {

  // 组件类和组件对象
  // 给组件对象添加属性
  navList = [
    {
      path: '/laoban', //路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神'
    },
    {
      path: '/dashen', //路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板'
    },
    {
      path: '/message', //路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息'
    },
    {
      path: '/personal', //路由路径
      component: Personal,
      title: '用户列表',
      icon: 'personal',
      text: '个人'
    },
  ]
  componentDidMount() {
    // cookie 中有userid
    // redux 中的user是空对象
    const userid = Cookies.get('userid')
    const {user} = this.props
    if(userid && !user._id) {
      this.props.getUser() //获取user并保存到redux中
    }
  }
  render() {
    // 得到当前请求的path
    const pathname = this.props.location.pathname
    // 判断用户是否已经登录(过)(cookie中的userid是否有值)
    const userid = Cookies.get('userid')
    if(!userid) { // 如果没有,自动跳转到登录界面
      return <Redirect to="/login" />
    }
/*     if (!userid) {
      this.props.history.replace('/login')
      return null
    } */
    // cookie 中有userid
    // redux 中的user 是否有数据
    const {user} = this.props
    if(!user._id) {
      return null // 不做任何显示
    } else {
      // 请求跟路径时, 自动跳转到对应的用户主界面
      if(pathname === '/') {
        const path = getRedirectPath(user.type, user.header)
        return <Redirect to={path} />
      }
    }
    // 指定 哪个nav应该被隐藏
    if (user.type === 'laoban') {
      this.navList[1].hide = true
    } else {
      this.navList[0].hide = true
    }
    // 得到当前的nav
    const currentNav = this.navList.find(nav => nav.path === pathname)
    return (
      <div>
        {currentNav ? <NavBar className='stick-top' >{currentNav.title}</NavBar> : null}
        <Switch>
          <Route path='/laobaninfo' component={LaobanInfo} />
          <Route path='/dasheninfo' component={DashenInfo} />

          <Route path='/dashen' component={Dashen} />
          <Route path='/laoban' component={Laoban} />
          <Route path='/message' component={Message} />
          <Route path='/personal' component={Personal} />
          <Route component={NotFound} />
        </Switch>
        {currentNav ? <NavFooter unReadCount={this.props.unReadCount} 
        navList={this.navList} /> : null}
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}), 
  {getUser}
)(Main)
```
### 2.14.**个人中心功能**
#### 2.14.1.**个人中心组件**:containers/personal/personal.jsx

```jsx
// 用户个人中心路由组件
import React, { Component } from 'react'
import { Result, List, WhiteSpace, Modal, Button } from 'antd-mobile'
import { connect } from "react-redux";
import Cookies from 'js-cookie';

import { resetUser } from "../../redux/actions";
const Item = List.Item;
const Brief = Item.Brief;
class Personal extends Component {

  handleLogout = () => {
    Modal.alert('退出', '确认退出登录吗?', [
      {
        text: '取消',
        onPress: () => console.log('cancel')
      },
      {
        text: '确认',
        onPress: () => {
          // 清除cookie中的userid
          Cookies.remove('userid')
          // 重置redux中的user状态
          this.props.resetUser()
        }
      }
    ])
  }

  render() {
    const { username, avatar, post, info, salary, company } = this.props.user
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/${avatar}.png`)} style={{ width: 50 }} alt="avatar" />}
          title={username}
          message={company}
        />
        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            <Brief>职位:{post}</Brief>
            <Brief>简介:{info}</Brief>
            {salary ? <Brief>薪资:{salary}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Button onClick={this.handleLogout} type="warning">退出登录</Button>
        </List>
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.user }),
  { resetUser }
)(Personal)
```
### 2.15.**老板**/**大神列表功能**
#### 2.15.1.**后台路由**:routes/index.js

```javascript
// 查看用户列表
router.get('/list', async (req, res) => {
  const { type } = req.query
  console.log(type);
  if (!type) return res.json({ code: 1, msg: '请传入type值' })
  let users = await User.find({ type })
  if (users) return res.json({ code: 0, data: users })
})
```
#### 2.15.2.ajax**请求模块**:api/index.js

```javascript
// 请求获取用户列表
export const reqUserList = type => ajax('/list', {type})
```
#### 2.15.3.redux**管理状态**

1. redux/action-types.js

```javascript
// 接收用户列表
export const RECEIVE_USER_LIST = 'receive_user_list'
```

2. redux/actions.js

```javascript
// 异步获取用户列表
export const getUserList = type => {
  return async dispatch => {
    const response = await reqUserList(type)
    const result = response.data
    if(result.code === 0) {
      dispatch(receiveUserList(result.data))
    }
  }
}
```

3. redux/reducers.js

```javascript
const initUserList = []

function userList(state = initUserList, action) {
  switch (action.type) {
    case RECEIVE_USER_LIST:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  user,
  userList
})
```
#### 2.15.4.用户列表组件:components/user-list/user-list.jsx

```jsx
import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from "antd-mobile";
import PropTypes from 'prop-types';

const Header = Card.Header
const Body = Card.Body

class UserList extends Component {
  static PropTypes = {
    userList: PropTypes.array.isRequired
  }
  render() {
    return (
      <WingBlank>
        {
          this.props.userList.map(user => (
            <div>
              <WhiteSpace />
              <Card>
                <Header
                  thumb={user.avatar ? require(`../../assets/images/${user.avatar}.png`) : null}
                  extra={user.username}
                />
                <Body>
                  <div>职位:{user.post}</div>
                  {user.company ? <div>公司:{user.company}</div> : null}
                  {user.salary ? <div>月薪:{user.salary}</div> : null}
                  <div>描述:{user.info}</div>
                </Body>
              </Card>
            </div>
          ))
        }
      </WingBlank>
    );
  }
}

export default UserList;
```
#### 2.15.5.**老板路由组件**:containers/laoban/laoban.jsx

```jsx
// 老板的主路由组件
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserList } from '../../redux/actions'
import UserList from '../../components/user-list/user-list'
class Laoban extends Component {
  componentDidMount() {
    this.props.getUserList(1)
  }
  render() {
    return <UserList userList={this.props.userList} ></UserList>
  }
}

export default connect(
  state => ({ userList: state.userList }),
  { getUserList }
)(Laoban)
```
#### 2.15.6.**大神路由组件**:containers/dashen/dashen.jsx

```javascript
// 大神的主路由组件
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserList } from '../../redux/actions'
import UserList from '../../components/user-list/user-list'
class Dashen extends Component {
  componentDidMount() {
    this.props.getUserList(2)
  }
  render() {
    return <UserList userList={this.props.userList} ></UserList>
  }
}

export default connect(
  state => ({ userList: state.userList }),
  { getUserList }
)(Dashen)
```
#### 2.15.7.优化头部和底部的布局效果

1. 问题
- 列表滑动,顶部会跟着滑动而不可见 
- 底部导航会遮挡列表的部分显示
2. Index.less

```css
.stick-top{/*固定在顶部*/
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
}
```

3. main.jsx
```jsx
<NavBar className='stick-top' >{currentNav.title}</NavBar>
```

4. user-list.jsx

```jsx
<WingBlank style={{marginTop: 50, marginBottom: 50}}>
```
### 2.16 **实时聊天功能**
#### 2.16.1.**下载相关依赖包**
```shell
yarn add socket.io
```
#### 2.16.2socket.io**介绍和使用**

1. 介绍
- socket.io是一个能实现多人远程实时通信(聊天)的库
- 它包装的是H5WebSocket和轮询,如果是较新的浏览器内部使用WebSocket,如果浏览器不支持,那内部就会使用轮询实现实时通信
- 学习资料
  - [官网](https://socket.io/get-started/chat/)[https://socket.io/get-started/chat/]()
  - [http://blog.csdn.net/neuq_zxy/article/details/77531126](http://blog.csdn.net/neuq_zxy/article/details/77531126)
2. **编码例子**
- 服务器端
  - socketIO/test.js
```javascript
module.exports = function (server) {
  // 得到IO对象
  const io = require('socket.io')(server)
  // 监视链接(当有一个客户链接上时回调)
  io.on('connection', (socket) => {
    console.log('soketio connected');
    // 绑定 senMsg监听,接收客户端发送的消息
    socket.on('sendMsg', (data)=> {
      console.log('服务器接收到浏览器的信息', data);
      // 向客户端发送消息(名称,数据)
      io.emit('receiveMsg', data.name + '_' + data.date)
      console.log('服务器向浏览器发送消息', data);
    })
    
  })
}
```

  - bin/ww
```javascript
// 写在http.createServer之后
// start up socketio server
require('../socketIO/test')(server)
```

- 客户端
```shell
yarn add socket.io
```

  - src/test/socketio_test.js

```javascript
// 引入客户端io
import io from 'socket.io-client'

// 连接服务器,得到代表连接的socket对象
const socket = io('ws://localhost:4000')

// 绑定'receiveMessage'的监听,来接收服务器发送的消息
socket.on('receiveMsg', (data) => {
  console.log('浏览器端接收到消息', data);
})

// 向服务器发送消息
let sendData = { name: 'Tom', date: Date.now() }
socket.emit('sendMsg', sendData)
console.log('浏览器向服务端发送消息:', sendData);
```

  - src/index.js

```javascript
import'./test/socketio_test'
```
#### 2.16.3.**后台实现**

1. 添加新的数据库集合模型:db/models.js

```javascript
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

```javascript
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

```javascript
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

```javascript
// 写在var server = http.createServer(app);之后
require('../socketIO/socketIO_server')(server)
```
#### 2.16.4.ajax请求模块:api/index.js

```javascript
// 请求获取当前用户的所有聊天记录
export const reqChatMsgList = () => ajax('/msglist')
// 标识查看指定用户发送的聊天信息
export const reqReadChatMsg = from => ajax('/readmsg', {from}, 'POST')
```

#### 2.16.5.redux管理状态

1. redux/action-types.js

```javascript
// 接收消息列表
export const RECEIVE_MSG_LIST = 'receive_msg_list'
// 接收一条消息
export const RECEIVE_MSG = 'receive_msg'
// 标识消息已读
export const MSG_READ = 'msg_read'
```

2. redux/actions.js

```javascript
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

```javascript
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

```javascript
// 对话聊天组件
import React, { Component } from 'react';
import { NavBar, List, InputItem, Icon } from 'antd-mobile'
import { connect } from "react-redux";

import { sendMsg } from "../../redux/actions";

const Item = List.Item

class Chat extends Component {
  state = {
    content: ''
  }
  
  submit = () => {
    const content = this.state.content.trim();
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
          className='stick-top'
          icon={<Icon type='left' />}
        >{users[targetId].username}</NavBar>
        <List style={{ marginBottom: 50, marginTop: 50 }}>
          {
            msgs.map(msg => {
              if (msg.from === targetId) {
                return (
                  <Item
                    key={msg._id}
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
            value={this.state.content}
            onChange={val => this.setState({ content: val })}
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

3. **列表自动滑到底部显示**
```jsx
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

在线可用表情: [https://emojipedia.org/](https://emojipedia.org/)

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
#### 2.16.7. 消息列表组件: containers/message/message.jsx

```javascript
// 对话消息列表组件
import React, { Component } from 'react'
import { connect } from "react-redux";
import { List, Badge } from "antd-mobile";

const Item = List.Item
const Brief = Item.Brief

/**
 * 对chatMsgs按chat_id进行分组,并得到每个组的LastMsg组成的数组
 * 得到所有聊天的最后 msg 组成的数组 [msg1, msg2, msg3..]
 * 1. 使用{}进行分组(chat_id), 只保存每个组最后一条 msg: {chat_id1: lastMsg1, chat_id2: lastMsg2}
 * 2. 得到所有LastMsg的数组Object.values(lastMsgsObj) [lastMsg1, lastMsg2]
 * 3. 对数组进行排序(按create_time降序)
 */
let getLastMsgs = (chatMsgs, userid) => {
  // 1. 使用{}进行分组(chat_id), 只保存每个组最后一条 msg: {chat_id1: lastMsg1, chat_id2: lastMsg2}
  const lastMsgObjs = {}
  chatMsgs.forEach(msg => {

    // 对msg进行个体的统计
    if (msg.to === userid && !msg.read) {
      msg.unReadCount = 1
    } else {
      msg.unReadCount = 0
    }

    // 得到msg的聊天id
    // console.log(msg);
    const chatId = msg.chat_id
    // 获取已保存的当前组件的lastMsg
    const lastMsg = lastMsgObjs[chatId]
    // 没有
    if (!lastMsg) { //当前msg就是所在组的lastMsg
      lastMsgObjs[chatId] = msg
    } else { //有
      // 累加unReadCount=已统计的+当前msg的
      const unReadCount = lastMsg.unReadCount + msg.unReadCount
      // 如果msg比lastMsg晚,就将msg保存为lastMsg
      if (msg.created_time > lastMsg.created_time) {
        lastMsgObjs[chatId] = msg
      }
      // 将unReadCount保存在最新的lastMsg上
      lastMsgObjs[chatId].unReadCount = unReadCount
    }
  });
  // 2. 得到所有LastMsg的数组Object.values(lastMsgsObj) [lastMsg1, lastMsg2]
  const lastMsgs = Object.values(lastMsgObjs)
  // 3. 对数组进行排序(按create_time降序)
  // 如果结果<0,将m1放在前面,如果结果为0,不变,如果结果>0,m2放在前面
  lastMsgs.sort((m1, m2) => {
    return m2.create_time - m1.create_time
  })
  // console.log(lastMsgs);
  return lastMsgs
}
class Message extends Component {

  render() {
    // 得到props中的user和chat
    const { user } = this.props
    // 得到当前用户id
    const meId = user._id
    // 得到所有用户的集合对象users和所有的聊天数组
    const { users, chatMsgs } = this.props.chat

    // 对chatMsgs按chat_id进行分组
    const lastMsgs = getLastMsgs(chatMsgs, meId)

    return (
      <div>
        <List className="margin_t_b">
          {
            lastMsgs.map(msg => {
              const targetId = msg.from === meId ? msg.to : msg.from;
              const targetUser = users[targetId];
              const avatarImg = targetUser.avatar ? require(`../../assets/images/${targetUser.avatar}.png`) : null;

              return (
                <Item
                  key={msg._id}
                  extra={<Badge text={msg.unReadCount} />}
                  thumb={avatarImg}
                  arrow='horizontal'
                  onClick={() => this.props.history.push(`/chat/${targetId}`)}
                >
                  {msg.content}
                  <Brief>{targetUser.username}</Brief>
                </Item>
              )
            })
          }
        </List>
      </div>
    )
  }
}
export default connect(
  state => ({
    user: state.user,
    chat: state.chat
  })
)(Message)
```

#### 2.16.8. 应用主界面路由组件: containers/main/main.jsx

```javascript
import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie'
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Dashen from '../dashen/dashen'
import Laoban from '../laoban/laoban'
import Message from '../message/message'
import Personal from '../personal/personal'
import NotFound from '../../components/not-found/not-found'
import NavFooter from '../../components/nav-footer/nav-footer'
import Chat from '../chat/chat'

import { getUser } from '../../redux/actions'
import { getRedirectPath } from '../../utils'

class Main extends Component {

  // 组件类和组件对象
  // 给组件对象添加属性
  navList = [
    {
      path: '/laoban', //路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神'
    },
    {
      path: '/dashen', //路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板'
    },
    {
      path: '/message', //路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息'
    },
    {
      path: '/personal', //路由路径
      component: Personal,
      title: '用户列表',
      icon: 'personal',
      text: '个人'
    },
  ]
  componentDidMount() {
    // cookie 中有userid
    // redux 中的user是空对象
    const userid = Cookies.get('userid')
    const { user } = this.props
    if (userid && !user._id) {
      this.props.getUser() //获取user并保存到redux中
    }
  }
  render() {
    // 得到当前请求的path
    const pathname = this.props.location.pathname
    // 判断用户是否已经登录(过)(cookie中的userid是否有值)
    const userid = Cookies.get('userid')
    if (!userid) { // 如果没有,自动跳转到登录界面
      return <Redirect to="/login" />
    }
    /*     if (!userid) {
          this.props.history.replace('/login')
          return null
        } */
    // cookie 中有userid
    // redux 中的user 是否有数据
    const { user, unReadCount } = this.props
    if (!user._id) {
      return null // 不做任何显示
    } else {
      // 请求跟路径时, 自动跳转到对应的用户主界面
      if (pathname === '/') {
        const path = getRedirectPath(user.type, user.avatar)
        return <Redirect to={path} />
      }
    }

    const { navList } = this
    const path = this.props.location.pathname //请求路径
    const currentNav = navList.find(nav => nav.path === path) //得到当前的nav,可能没有

    if (currentNav) {
      // 指定 哪个nav应该被隐藏
      if (user.type === 2) {
        this.navList[1].hide = true
      } else {
        this.navList[0].hide = true
      }
    }
    return (
      <div>
        {currentNav ? <NavBar className='stick-top' >{currentNav.title}</NavBar> : null}
        <Switch>
          {
            navList.map(nav => <Route key={nav.path} path={nav.path} component={nav.component} />)
          }
          <Route path='/laobaninfo' component={LaobanInfo} />
          <Route path='/dasheninfo' component={DashenInfo} />
          <Route path='/chat/:userid' component={Chat} />

          <Route component={NotFound} />
        </Switch>
        {currentNav ? <NavFooter unReadCount={unReadCount}
          navList={this.navList} /> : null}
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.user, unReadCount: state.chat.unReadCount }),
  { getUser }
)(Main)
```

#### 2.16.9. 显示总未读消息数量: components/nav-footer/nav-footer.jsx

```jsx
// 底部导航的UI组件
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
const Item = TabBar.Item
class NavFooter extends Component {

  static propTypes = {
    navList: PropTypes.array.isRequired,
    unReadCount: PropTypes.number.isRequired
  }
  render() {
    let { navList, unReadCount } = this.props
    // nav.hisde = true/fasls hide 代表当前项应该被隐藏
    navList = navList.filter(nav => !nav.hide) // 回调函数返回值为true,当前元素就留下,否则不留
    // 当前的请求路径
    const { pathname } = this.props.location
    return (
      <TabBar>
        {
          navList.map((nav, index) => (
            <Item key={nav.path}
              badge={nav.path === '/message' ? unReadCount : 0}
              title={nav.text}
              icon={{ uri: require(`./imgs/${nav.icon}.png`) }}
              selectedIcon={{ uri: require(`./imgs/${nav.icon}-selected.png`) }}
              selected={pathname === nav.path}
              onPress={() => {
                this.props.history.replace(nav.path)
              }}
            />
          ))
        }
      </TabBar>
    );
  }
}

export default withRouter(NavFooter);  //! 让非路由组件可以访问到路由组件的API
```

#### 2.16.10. 查看聊天后, 更新未读数量

```javascript
componentWillUnmount() {
    // 发请求更新消息的未读状态
    const targetId = this.props.match.params.userid;
    this.props.readMsg(targetId)
  }
```
#### 2.16.11. 添加聊天的页面的动画效果

1. 下载依赖包

[官网](http://motion.ant.design/api/queue-anim-cn)Ant Motion

```shell
yarn add rc-queue-anim
```

```jsx
// chat/chat.jsx
import QueueAnim from 'rc-queue-anim'
 {/*alpha left right top bottom scale scaleBig scaleX scaleY*/}
 <QueueAnim type='left' dalay={100}>
   {
     msgs.map(msg => {
       if (msg.from === targetId) {
         return (
           <Item
             key={msg._id}
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
 </QueueAnim>
```

```jsx
//user-list/user-list.jsx
import QueueAnim from 'rc-queue-anim';
<QueueAnim type='scale' dalay={100}>
 {
   userList.map(user => (
     <div key={user._id}>
       <WhiteSpace />
       <Card onClick={() => this.props.history.push(`/chat/${user._id}`)}>
         <Header
           thumb={user.avatar ? require(`../../assets/images/${user.avatar}.png`) : null}
           extra={user.username}
         />
         <Body>
           <div>职位:{user.post}</div>
           {user.company ? <div>公司:{user.company}</div> : null}
           {user.salary ? <div>月薪:{user.salary}</div> : null}
           <div>描述:{user.info}</div>
         </Body>
       </Card>
     </div>
   ))
 }
</QueueAnim>
```

