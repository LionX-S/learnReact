import React, { Component } from 'react'
import {HashRouter, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Detail from '../views/Detail';
import Home from '../views/Home';

export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/detail' component={Detail}/>
            <Redirect from='/' to='/home' exact/>
          </Switch>
          {this.props.children}
          <NavLink to='/home'>首页</NavLink>
          <NavLink to='/detail'>详细</NavLink>
        </HashRouter>
      </div>
    )
  }
}
