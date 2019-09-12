import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
class Main extends Component {

  static propTypes = {
    mainData: PropTypes.object.isRequired
  }

  render() {
    const { mainData } = this.props
    return (
      <div>
       主体页面
       {mainData.name}
       {mainData.age}
      </div>
    )
  }
}

export default connect(
  state => ({mainData: state.mainData}), 
)(Main)