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
let getLastMsgs = (chatMsgs) => {
  // 1. 使用{}进行分组(chat_id), 只保存每个组最后一条 msg: {chat_id1: lastMsg1, chat_id2: lastMsg2}
  const lastMsgObjs = {}
  chatMsgs.forEach(msg => {
    // 得到msg的聊天id
    const chatId = msg.chat_id
    console.log(lastMsgObjs[chatId]);

    // 获取已保存的当前组件的lastMsg
    const lastMsg = lastMsgObjs[chatId]

    if (!lastMsg) { //当前msg就是所在组的lastMsg
      lastMsgObjs[chatId] = msg
      console.log(lastMsg);


    } else { //有
      // 如果msg比lastMsg晚,就将msg保存为lastMsg
      if (msg.create_time > lastMsg.create_time) {
        console.log(msg);
        lastMsgObjs[chatId] = msg
      }
    }
  });
  // 2. 得到所有LastMsg的数组Object.values(lastMsgsObj) [lastMsg1, lastMsg2]
  const lastMsgs = Object.values(lastMsgObjs)
  // 3. 对数组进行排序(按create_time降序)
  // 如果结果<0,将m1放在前面,如果结果为0,不变,如果结果>0,m2放在前面
  lastMsgs.sort((m1, m2) => {
    return m2.create_time - m1.create_time
  })
  console.log(lastMsgs);

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
    const lastMsgs = getLastMsgs(chatMsgs)

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
                  extra={<Badge text={0} />}
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