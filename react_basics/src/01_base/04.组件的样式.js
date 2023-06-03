import React, { Component } from 'react'

export default class App extends Component {
  render() {
    var name = 'Fredy';
    const heightStyle = {
      backgroundColor:'yellow'
    }
    return (
      <div>
        <p>name:{name}</p>
        <p style={{background:'red'}}>age:18</p>
        <p style={heightStyle}>height:180</p>
      </div>
    )
  }
}
