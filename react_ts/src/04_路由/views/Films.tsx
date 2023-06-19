import React, { Component } from "react";
import axios from "axios";
import {RouteComponentProps} from 'react-router-dom'

interface IItem {
  filmId: number,
  name: string
}
export default class Films extends Component<RouteComponentProps> {
	state = {
		list: []
	};
	componentDidMount = () => {
		axios({
			url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=684094",
			headers: {
				" X-Client-Info":
					'{"a":"3000","ch":"1002","v":"5.2.1","e":"16858573876499187461980162"}',
				"X-Host": "mall.film-ticket.film.list"
			}
		}).then((res) => {
			this.setState({
				list: res.data.data.films
			});
		});
	};

	render() {
		return (
			<div>
				<ul>
					{this.state.list.map((item: IItem) => {
						return <li key={item.filmId} onClick={() => {
              this.props.history.push(`/detail/${item.filmId}`)
            }}>{item.name}</li>;
					})}
				</ul>
			</div>
		);
	}
}
