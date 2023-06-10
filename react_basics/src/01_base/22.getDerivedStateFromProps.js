import React, { Component } from "react";

export default class App extends Component {
	state = {
		name: "fredy"
	};
  // 功能一：相当于替代了componentWillMount的作用，render前最后一次修改state的机会
  // 功能二：相当于替代了componentWillReceiveProps的一部分作用
  // 功能三：自身state更新也会执行
	static getDerivedStateFromProps(nextProps, nextState) {
		console.log("getDerivedStateFromProps", nextState);
		return {
			name: nextState.name
		};
	}
	render() {
		return (
			<div>
				{this.state.name}
				<button
					onClick={() => {
						this.setState({
							name: "jack"
						});
					}}>
					更改
				</button>
			</div>
		);
	}
}
