import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Comingsoon from "./films/Comingsoon";
import Living from "./films/Living";

export default function Films() {
	return (
		// {/*嵌套路由*/}
		<div>
			Films
			<Switch>
				<Route
					path='/films/comingsoon'
					component={Comingsoon}
				/>
				<Route
					path='/films/living'
					component={Living}
				/>
				<Redirect
					from='/films'
					to='/films/comingsoon'
				/>
			</Switch>
		</div>
	);
}
