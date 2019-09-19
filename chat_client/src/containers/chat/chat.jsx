// 对话聊天组件
import React, { Component } from 'react';
import { NavBar, List, InputItem, Icon, Grid } from 'antd-mobile'
import { connect } from "react-redux";
import QueueAnim from 'rc-queue-anim'

import { sendMsg, readMsg } from "../../redux/actions";

const Item = List.Item

class Chat extends Component {
  state = {
    content: '',  // 输入聊天的内容
    isShow: false // 是否显示表情列表
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
  // 在第一次render()之前回调
  componentWillMount() {
    // 初始化表情列表数据
    const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🤩', '😘', '😗', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧']
    this.emojis = emojis.map(emoji => ({ text: emoji }))
  }
  componentDidMount() {
    // 初始显示列表
    window.scrollTo(0, document.body.scrollHeight)
  }

  componentDidUpdate() {
    // 更新显示列表
    window.scrollTo(0, document.body.scrollHeight)
  }
  componentWillUnmount() {
    // 发请求更新消息的未读状态
    const targetId = this.props.match.params.userid;
    this.props.readMsg(targetId)
  }
  handleSend = () => {
    const content = this.state.content.trim();
    const to = this.props.match.params.userid;
    const from = this.props.user._id;
    this.props.sendMsg({ from, to, content })
    this.setState({ content: '', isShow: false })
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
          onLeftClick={() => this.props.history.goBack()}
        >{users[targetId].username}</NavBar>
        <List style={{ marginBottom: 50, marginTop: 50 }}>
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
        </List>
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
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user, chat: state.chat }),
  { sendMsg, readMsg }
)(Chat);