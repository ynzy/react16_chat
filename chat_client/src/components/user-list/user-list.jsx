import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from "antd-mobile";
import PropTypes from 'prop-types';

const Header = Card.Header
const Body = Card.Body

class UserList extends Component {
  static propTypes = {
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