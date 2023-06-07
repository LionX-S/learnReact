import React, { Component } from "react";
import Films from "./movieComponent/films";

import axios from "axios";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			films: [],
      info:''
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
    })
  }
	render() {
		return (
			<div>
				{this.state.films.map((item) => {
					return (
						<Films
							film={item}
              getInfo={(info) => {
                this.getInfo(info);
              }}
							key={item.filmId}></Films>
					);
				})}
        <Info info={this.state.info}></Info>
			</div>
		);
	}
}

class Info extends Component {
  state = {  } 
  render() { 
    return (
      <div style={{width:'400px',height:'100px'}}>
        {this.props.info}
      </div>
    );
  }
}