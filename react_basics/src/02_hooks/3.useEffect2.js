import React, { useEffect, useState } from "react";

export default function App() {
	const [name, setName] = useState("jack");
	// 数组中不填写依赖项时，只会执行一次useEffect，当写入依赖项时，依赖性只要改变，就会执行一次
	useEffect(() => {
		setName(name.substring(0, 1).toUpperCase() + name.substring(1));
	}, [name]);
	return (
		<div>
			{name}
			<button
				onClick={() => {
					setName("fredy");
				}}>更改</button>
		</div>
	);
}
