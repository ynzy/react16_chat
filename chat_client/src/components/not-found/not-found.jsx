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