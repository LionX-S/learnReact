import React, { Component } from 'react'

interface IState{
  name: string
}
// 泛型约束：第一个为约束props，第二个参数为约束状态state
export default class App extends Component<any,IState> {
  state = {
    name: 'fredy'
  }
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={() => {
          this.setState({
            name:'json'
          })
        }}>更改名称</button>
      </div>
    )
  }
}
