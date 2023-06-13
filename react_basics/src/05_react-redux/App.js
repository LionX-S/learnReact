import React, { Component } from 'react'
import IndexRouter from './router/index';
import TabBar from './components/TabBar';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <IndexRouter>
          {/* 控制tabbar显示隐藏 */}
          {this.props.isShow&&<TabBar/>}
        </IndexRouter>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isShow: state.isShow
  }
}
export default connect(mapStateToProps)(App);
