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
            <Button onClick={this.toRegister}>没有账号</Button>
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