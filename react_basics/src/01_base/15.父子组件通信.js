import React, { Component } from "react";

class NavBar extends Component {
	render() {
		return (
			<div style={{ background: "red" }}>
				<button onClick={() => {
          this.props.toggleSlide();
        }}>显示/隐藏</button>
				navbar
			</div>
		);
	}
}
class Slide extends Component {
	render() {
		return (
			<div style={{ background: "green", width: "200px" }}>
				<ul>
					<li>111</li>
					<li>111</li>
					<li>111</li>
					<li>111</li>
					<li>111</li>
					<li>111</li>
				</ul>
			</div>
		);
	}
}
export default class App extends Component {
	state = {
		showSLide: true
	};
  handleToggle = () => {
    this.setState({
      showSLide: !this.state.showSLide
    })
  }
	render() {
		return (
			<div>
				<NavBar toggleSlide={this.handleToggle}/>
				{this.state.showSLide && <Slide />}
			</div>
		);
	}
}
