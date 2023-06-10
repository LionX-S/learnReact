import React, { Component, PureComponent } from "react";

export default class App extends PureComponent {
	state = {
		list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
		current: 0
	};
	render() {
		return (
			<div>
				<input
					type='number'
					value={this.state.current}
					onChange={(e) => {
						this.setState({
							current: Number(e.target.value)
						});
					}}></input>
				<div style={{ overflow: "hidden" }}>
					{this.state.list.map((item, index) => (
						<Box
							key={item}
							current={this.state.current}
							index={index}
						/>
					))}
				</div>
			</div>
		);
	}
}

class Box extends Component {
  shouldComponentUpdate(nextProps, nextState) { 
    if((this.props.current === this.props.index) || (nextProps.current === nextProps.index)) {
      return true;
    }
    return false;
  }
	render() {
		console.log("render");
		return (
			<div
				style={{
					width: "100px",
					height: "100px",
					border:
						this.props.current === this.props.index
							? "1px solid red"
							: "1px solid gray",
					marginLeft: "10px",
					float: "left"
				}}></div>
		);
	}
}
