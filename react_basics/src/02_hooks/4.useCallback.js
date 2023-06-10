import React, { useCallback, useState } from "react";

export default function App() {
	const [number, setNumber] = useState(0);
	// 组件重新渲染会导致我们临时定义的变量重新赋值，方法重新创建，导致性能下降
	const myCount = 0;
  // useCallback会将函数缓存，提高性能。主要是更改与函数无关的状态时用到，不需要重新新建函数
  // 假如数组依赖为空数组，则缓存的函数里面的变量与状态都是旧值
	const handelClick = useCallback(() => {
		setNumber(number + 1);
	}, [number]);
	return (
		<div>
			{number}-{myCount}
			<button onClick={handelClick}>add</button>
		</div>
	);
}