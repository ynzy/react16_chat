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
      this.headerList.push({text, icon: require(`../../assets/images/${text}.png`)})
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
