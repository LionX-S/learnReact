import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import store from "../redux/store";
interface film {
	filmId: string;
}
export default class Detail extends Component<RouteComponentProps<film>> {
	// componentDidMount(): void {
	//   console.log((this.props.match.params as any).filmId)
	// }
	componentDidMount = () => {
		store.dispatch({
			type: 'hide'
		})
	}
	componentWillUnmount = () => {
		store.dispatch({
			type:'show'
		})
	}
	
	render() {
		return <div>detail-{this.props.match.params.filmId}</div>;
	}
}
