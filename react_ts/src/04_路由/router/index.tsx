import React, { Component } from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Films from "../views/Films";
import Cinema from "../views/Cinema";
import Center from "../views/Center";
import Detail from "../views/Detail";

export default class IndexRouter extends Component {
	render() {
		return (
			<div>
				<HashRouter>
					<Switch>
						<Route
							path='/film'
							component={Films}></Route>
						<Route
							path='/cinema'
							component={Cinema}></Route>
						<Route
							path='/center'
							component={Center}></Route>
						<Route
							path='/detail/:filmId'
							component={Detail}></Route>
						<Redirect
							from='/'
							to='film'></Redirect>
					</Switch>
				</HashRouter>
			</div>
		);
	}
}
