import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { NavBar, InputItem, TextareaItem, Button, WhiteSpace } from 'antd-mobile';
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