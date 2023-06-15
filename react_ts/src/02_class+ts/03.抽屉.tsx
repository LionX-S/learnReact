import React, { Component } from "react";

interface AppState {
	isShow: boolean;
}

export default class App extends Component<any, AppState> {
	state = {
		isShow: true
	};
	render() {
		return (
			<div>
				<NavBar
					title='首页'
					changeShow={() => {
						this.setState({
							isShow: !this.state.isShow
						});
					}}
				/>
				{this.state.isShow && <Slide />}
			</div>
		);
	}
}

interface NavBarProps {
	title: string;
	changeShow: () => void;
}

interface NavBarState {}

class NavBar extends Component<NavBarProps, NavBarState> {
	state = {};
	render() {
		return (
			<div>
				NavBar-{this.props.title}
				<button onClick={this.props.changeShow}>显示/隐藏</button>
			</div>
		);
	}
}

class Slide extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>1</li>
					<li>1</li>
					<li>1</li>
				</ul>
			</div>
		);
	}
}
