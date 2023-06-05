import React, { Component } from "react";
import axios from "axios";

export default class OperaList extends Component {
	constructor() {
		super();
		this.state = {
			operaList: [],
      bakCinemaList:[]
		};
		axios({
			url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=1571958",
			method: "get",
			headers: {
				"X-Client-Info":
					'{"a":"3000","ch":"1002","v":"5.2.1","e":"16858573876499187461980162"}',
				"X-Host": "mall.film-ticket.cinema.list"
			}
		}).then((response) => {
			this.setState({
				operaList: response.data.data.cinemas,
        bakCinemaList: response.data.data.cinemas
			});
		});
	}
	handleInput(e) {
		const newList = this.state.bakCinemaList.filter((item) =>
			item.name.includes(e.target.value)
		);
    this.setState({
      operaList: newList
    })
    
	}
	render() {
		return (
			<div>
				<input onInput={(e) => this.handleInput(e)}></input>
				{this.state.operaList.map((item) => (
					<dl key={item.cinemaId}>
						<dt>{item.name}</dt>
						<dd>{item.address}</dd>
					</dl>
				))}
			</div>
		);
	}
}
