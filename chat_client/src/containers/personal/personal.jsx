// 用户个人中心路由组件
import React, { Component } from 'react'
import { Result, List, WhiteSpace, Button } from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;
export default class Personal extends Component {
  render() {
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/头像1.png`)} style={{ width: 50 }} alt="avatar" />}
          title="张三"
          message="IBM"
        />
        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            <Brief>职位:前端工程师</Brief>
            <Brief>简介:React/Vue/jQuery</Brief>
            <Brief>薪资:20k</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Button type="warning">退出登录</Button>
        </List>
      </div>
    )
  }
}
