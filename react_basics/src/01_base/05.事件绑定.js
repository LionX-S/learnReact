import React, { Component } from "react";

export default class App extends Component {
	handleClick() {
		console.log("方式2");
	}
	render() {
		return (
			<div>
				<input></input>
				<button
					onClick={() => {
						console.log("方法1");
					}}>
					新增
				</button>
				<button onClick={this.handleClick}>新增</button>
			</div>
		);
	}
}
