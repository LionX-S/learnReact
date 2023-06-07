import React, { Component } from "react";

import axios from "axios";

const GlobalContext = React.createContext();

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			films: [],
			info: ""
		};
		axios.get("/films.json").then((res) => {
			console.log(res);
			this.setState({
				films: res.data.data.films
			});
		});
	}
	getInfo(info) {
		this.setState({
			info: info
		});
	}
	render() {
		return (
			<GlobalContext.Provider
				value={{
					info: this.state.info,
					changeInfo: (value) => {
						this.setState({
							info: value
						});
					}
				}}>
				<div>
					{this.state.films.map((item) => {
						return (
							<Films
								film={item}
								key={item.filmId}></Films>
						);
					})}
					<Info info={this.state.info}></Info>
				</div>
			</GlobalContext.Provider>
		);
	}
}

class Info extends Component {
	state = {};
	render() {
		return (
			<GlobalContext.Consumer>
				{(value) => (
					<div style={{ width: "400px", height: "100px" }}>{value.info}</div>
				)}
			</GlobalContext.Consumer>
		);
	}
}

class Films extends Component {
	render() {
		const { name, poster, synopsis } = this.props.film;
		return (
			<GlobalContext.Consumer>
				{(value) => (
					<div
						onClick={() => {
							value.changeInfo(synopsis);
						}}>
						<img
							src={poster}
							style={{ width: "70px", height: "100px" }}></img>
						<span>{name}</span>
					</div>
				)}
			</GlobalContext.Consumer>
		);
	}
}
