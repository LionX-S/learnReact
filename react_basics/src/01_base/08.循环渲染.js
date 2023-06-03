import React, { Component } from "react";

export default class App extends Component {
	state = {
		list: ['11','22','33']
	};
	render() {
		return (
			<div>
				<ul>
					{this.state.list.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		);
	}
}
