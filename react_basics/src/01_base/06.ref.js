import React, { Component } from "react";

export default class App extends Component {
  myInput = React.createRef()
	render() {
		return (
			<div>
				<input ref={this.myInput}></input>
				<button
					onClick={() => {
						console.log("方法1", this.myInput.current.value);
					}}>
					新增
				</button>
			</div>
		);
	}
}
