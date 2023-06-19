import React, { Component } from "react";

export default class App extends Component {
	state = {
    text:'',
		list: ['a','b','c']
	};
	render() {
		return (
			<div>
        <h1>todo list</h1>
				<input value={this.state.text} onChange={(e) => {
          this.setState({
            text: e.target.value
          })
        }} type='text'></input>
				<button className="add" onClick={() => {
          this.setState({
            list: [...this.state.list,this.state.text],
            text: ''
          });
        }}>提交</button>
				<ul>{this.state.list.map((item) => {
          return <li key={item}>{item}</li>
        })}</ul>
			</div>
		);
	}
}
