import React, { Component } from "react";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			list: []
		};
	}
	myInput = React.createRef();
	handleClick() {
		const newList = [...this.state.list];
		newList.push(this.myInput.current.value);
		this.setState({
			list: newList
		});
    this.myInput.current.value = '';
	}
  handleDeleteClick(id) {
    const newList = [...this.state.list];
    newList.splice(id,1);
    this.setState({
      list: newList
    })
  }
	render() {
		return (
			<div>
				<input ref={this.myInput}></input>
				<button
					onClick={() => {
						this.handleClick();
					}}>
					新增
				</button>
				{this.state.list.length > 0 ? (
					<ul>
						{this.state.list.map((item, index) => {
							return (
								<li key={index}>
									{item}
									<button onClick={() => {
                    this.handleDeleteClick(index);
                  }}>删除</button>
								</li>
							);
						})}
					</ul>
				) : (
					<p>暂无数据</p>
				)}
			</div>
		);
	}
}
