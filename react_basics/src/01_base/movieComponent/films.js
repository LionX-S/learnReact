import React, { Component } from "react";

export default class Films extends Component {
	render() {
		const { name, poster, synopsis } = this.props.film;
		return (
			<div
				onClick={() => {
					this.props.getInfo(synopsis);
				}}>
				<img
					src={poster}
					style={{ width: "70px", height: "100px" }}></img>
				<span>{name}</span>
			</div>
		);
	}
}
