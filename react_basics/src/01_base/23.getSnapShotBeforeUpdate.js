import React, { Component } from "react";

export default class App extends Component {
	state = {
		list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
	};
	myRef = React.createRef();
	getSnapshotBeforeUpdate() {
		return this.myRef.current.scrollHeight;
	}
	componentDidUpdate(prevProps, prevState, value) {
		this.myRef.current.scrollTop += this.myRef.current.scrollHeight - value;
	}
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({
							list: [
								...[10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
								...this.state.list
							]
						});
					}}>
					来邮件
				</button>
				<h1>收件邮箱</h1>
				<div
					style={{ height: "200px", overflow: "auto" }}
					ref={this.myRef}>
					<ul>
						{this.state.list.map((item, index) => {
							return (
								<li
									style={{ height: "50px", backgroundColor: "yellow" }}
									key={index}>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
