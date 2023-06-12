import React, { Component } from 'react'
import store from './redux/store';
import IndexRouter from './router/index';
import TabBar from './components/TabBar';

export default class App extends Component {
  state = {
    showBar: true
  }
  componentDidMount() {
    store.subscribe(() => {
      console.log('订阅', store.getState());
      this.setState({
        showBar: store.getState().isShow
      })
    })
  }
  render() {
    return (
      <div>
        <IndexRouter>
          {/* 控制tabbar显示隐藏 */}
          {this.state.showBar&&<TabBar/>}
        </IndexRouter>
      </div>
    )
  }
}
