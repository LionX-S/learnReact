import React, { Component } from "react";

export default class App extends Component {
	state = {
		counter: 1
	};
	handleClick() {
		this.setState({
			counter: this.state.counter + 1
		});
		console.log(this.state.counter);
		this.setState({
			counter: this.state.counter + 1
		});
		console.log(this.state.counter);
		this.setState({
			counter: this.state.counter + 1
		});
		console.log(this.state.counter);
	}
	render() {
		return (
			<div>
				<span>{this.state.counter}</span>
				<button
					onClick={() => {
						this.handleClick();
					}}>
					+1
				</button>
			</div>
		);
	}
}
