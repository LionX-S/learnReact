import React, { Component } from "react";

export default class App extends Component {
	myInput = React.createRef();
	render() {
		return (
			<div>
				<input
					ref={this.myInput}
					defaultValue='1111'></input>
				<button
					onClick={() => {
						console.log(this.myInput.current.value);
					}}>
					提交
				</button>
				<button
					onClick={() => {
						this.myInput.current.value = "";
					}}>
					重置
				</button>
			</div>
		);
	}
}
