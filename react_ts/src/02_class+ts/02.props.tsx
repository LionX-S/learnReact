import React, { Component } from "react";

export default class App extends Component {
	render() {
		return <div>
      <Child name="jack"/>
    </div>;
	}
}

interface ChildProps {
	name: string;
}

class Child extends React.Component<ChildProps, any> {
	render() {
		return <div>
      {this.props.name}
    </div>;
	}
}
