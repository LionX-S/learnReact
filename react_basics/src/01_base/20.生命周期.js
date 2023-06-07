import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'love'
    }
  }
  // 将要挂载
  UNSAFE_componentWillMount() {
    console.log('willMount');
  }
  // 挂载完成
  componentDidMount() {
    // 数据请求
    // DOM操作
    console.log('didMount');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('应该更新吗？');
    if(this.state.name !== nextState.name) {
      return true;
    }
    return false;
  }
  UNSAFE_componentWillUpdate() {
    console.log('即将更新update');
  }
  componentDidUpdate() {
    console.log('更新完成');
  }
  handleClick() {
    this.setState({
      name: 'true'
    })
  }
  render() {
    console.log('render');
    return (
      <div>
        {this.state.name}
        <button onClick={() => {
          this.handleClick()
        }}>更新</button>
      </div>
    )
  }
}
