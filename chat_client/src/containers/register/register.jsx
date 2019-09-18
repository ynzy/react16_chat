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
    // console.log(this.state);
    this.props.register(this.state)
  }
  // 跳转到login路由
  toLogin = () => {
    this.props.history.replace('/login')
  }
  render() {
    const { type } = this.state
    const { redirectTo, msg } = this.props
    if (redirectTo) {
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
  { register }
)(Register)