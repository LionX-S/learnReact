import React, { Component } from 'react'

class NavBar extends Component {
  render() { 
    return (
      <div>NavBar</div>
    );
  }
}

function TabBar() {
  return ( <div>TabBar</div> );
}

export default class App extends Component {
  render() {
    return (
      <div>App
        <NavBar/>
        <TabBar/>
      </div>
    )
  }
}
