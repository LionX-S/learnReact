import React, { Component } from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
import Login from "../views/Login";

function isAuth() {
	return localStorage.getItem("token");
}
export default class IndexRouter extends Component {
	render() {
		return (
			<div>
				<HashRouter>
					<div style={{height:'400px'}}>
						<Switch>
							<Route
								path='/films'
								component={Films}
							/>
							<Route
								path='/cinemas'
								component={Cinemas}
							/>
							{/* <Route
							path='/center'
							component={Center}
						/> */}
							<Route
								path='/center'
								render={() => {
									return isAuth() ? <Center /> : <Redirect to='/login' />;
								}}
							/>
							<Route
								path='/login'
								component={Login}
							/>
							{/* 重定向，从form重定向到to */}
							{/* 精确匹配需要加exact属性 */}
							<Redirect
								from='/'
								to='/films'
								exact
							/>
							{/* 404 Not Found,写到最底下*/}
							<Route component={NotFound} />
						</Switch>
					</div>
					{this.props.children}
				</HashRouter>
			</div>
		);
	}
}
