import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import React from "react";
import Login from "../views/login/Login";
import NewsSandBox from "../views/sandbox/NewsSandBox";

function isAuth() {
  // return localStorage.getItem('token');
  return true
}
export default function IndexRouter() {
	return (
		<HashRouter>
			<Switch>
				<Route
					path='/login'
					component={Login}
				/>
				<Route
					path='/'
					render={(props) => {
            return isAuth() ? <NewsSandBox/> : <Redirect to='/login'/>
          }}
				/>
			</Switch>
		</HashRouter>
	);
}
