// import { useState } from "react";
import Routers from "@/router/index";
import { HashRouter } from "react-router-dom";

const App = () => {
	// const [count, setCount] = useState(0);
	return (
		<HashRouter>
			{/* 路由展示组件 */}
			<Routers />
		</HashRouter>
	);
};

export default App;
