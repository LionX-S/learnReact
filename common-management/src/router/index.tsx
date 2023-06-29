import React, { lazy } from "react";
import { useRoutes } from "react-router";

const Routers = () =>
	useRoutes([
		{
			path: "/",
			element: lazyLoad("Home"),
      children:[
        {
          path:'/',
          element: lazyLoad("Page1")
        },
        {
          path:'/page1',
          element: lazyLoad("Page1")
        },
        {
          path:'/page2',
          element: lazyLoad("Page2")
        }
      ]
		},
		{
			path: "/login",
			element: lazyLoad("Login/index.tsx")
		}
	]);

const lazyLoad = (path: string) => {
	const Comp = lazy(() => import(/*@vite-ignore*/ `../views/${path}`));
	return (
		<React.Suspense fallback={<></>}>
			<Comp />
		</React.Suspense>
	);
};
export default Routers;
