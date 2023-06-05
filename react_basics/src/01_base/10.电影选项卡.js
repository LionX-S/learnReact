import React, { Component } from "react";
import "./css/movie.css";
import MovieList from "./movieComponent/movielist";
import OperaList from "./movieComponent/operalist";
import UserCenter from "./movieComponent/usercenter";
export default class App extends Component {
	state = {
		cardList: ["电影", "影院", "我的"],
		current: 0
	};
	handleChangeIndex(e) {
		this.setState({
			current: e.target.id
		});
	}
	which() {
		switch (parseInt(this.state.current)) {
			case 0:
				return <MovieList />;
				break;
			case 1:
				return <OperaList />;
				break;
			case 2:
				return <UserCenter />;
				break;
			default:
				break;
		}
	}
	render() {
		return (
			<div>
				{this.which()}
				<ul
					onClick={(e) => {
						this.handleChangeIndex(e);
					}}>
					{this.state.cardList.map((item, index) => {
						return (
							<li
								className={this.state.current == index ? "active" : ""}
								id={index}
								key={index}>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
