import React, { Component } from "react";

export default class App extends Component {
  state = {
    username: ''
  }
  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }
	render() {
		return (
			<div>
				<input
					value={this.state.username}
          onChange={(e)=>{
            this.handleChange(e)
          }}></input>
				<button
					onClick={() => {
						console.log(this.state.username);
					}}>
					提交
				</button>
				<button
					onClick={() => {
						this.setState({
              username: ''
            })
					}}>
					重置
				</button>
			</div>
		);
	}
}
