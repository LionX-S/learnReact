import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    let {title, showLeft, showRight} = this.props;
    return (
      <div>
        {showLeft?(<button>返回</button>) : ''}
        navbar-{title}
        {showRight?(<button>首页</button>) : ''}
      </div>
    )
  }
}
