import React, { Component } from "react";

class Field extends Component {
	render() {
		return (
			<div>
				<label>{this.props.label}</label>
				<input
					type={this.props.type}
					onChange={(e) => {
						this.props.inputChange(e.target.value);
            // console.log(this.props.inputChange);
					}}></input>
			</div>
		);
	}
}
export default class App extends Component {
	state = {
		username: "",
		password: ""
	};
	inputNameChange = (val) => {
		this.setState({
			username: val
		});
	};
	inputWordChange = (val) => {
		this.setState({
			password: val
		});
	};
	handleClick = () => {
		console.log(this.state);
	};
	render() {
		return (
			<div>
				<Field
					label='用户名'
					type='text'
					inputChange={this.inputNameChange}
				/>
				<Field
					label='密码'
					type='password'
					inputChange={this.inputWordChange}
				/>
				<button onClick={this.handleClick}>登录</button>
				<button
					onClick={() => {
						this.setState({
							username: "",
							password: ""
						});
					}}>
					重置
				</button>
			</div>
		);
	}
}
