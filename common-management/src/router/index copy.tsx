import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import React from "react";
import App from "../App";
const BaseRouter = () => {
	return (
		<HashRouter>
			<Routes>
				<Route
					path='/'
					element={<App />}>
					<Route
						path='/'
						element={<Navigate to='/home' />}
					/>
					<Route
						path='/home'
						element={lazyLoad("Home")}
					/>
					<Route
						path='/about'
						element={lazyLoad("About")}
					/>
				</Route>
			</Routes>
		</HashRouter>
	);
};

//路由懒加载
const lazyLoad = (path: string): React.ReactElement => {
	const Comp = React.lazy(() => import(`../views/${path}`));
	return (
		<React.Suspense fallback={<>Loading...</>}>
			<Comp />
		</React.Suspense>
	);
};
export default BaseRouter;
