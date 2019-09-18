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
    const { user } = this.props
    if (!user._id) {
      return null // 不做任何显示
    } else {
      // 请求跟路径时, 自动跳转到对应的用户主界面
      if (pathname === '/') {
        const path = getRedirectPath(user.type, user.avatar)
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
  state => ({ user: state.user }),
  { getUser }
)(Main)