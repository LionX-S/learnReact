import React from "react";
import ReactDOM from "react-dom/client";
// 初始化样式
import "reset-css";
// UI框架样式
// 全局样式
import "@/assets/style/global.scss";
// 组件样式
// 顺序不能错乱，否则造成样式覆盖
import App from "@/App";
// import Router from '@/router/index'

import { Provider } from "react-redux";
import store from "@/redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
