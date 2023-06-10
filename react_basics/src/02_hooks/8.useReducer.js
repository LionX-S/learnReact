import React, { useReducer } from "react";

// 处理函数
const reducer = (preState, actions) => {
	console.log(preState, actions);
	let newState = { ...preState };
	switch (actions.type) {
		case "increment":
			newState.count++;
			return newState;
		case "decrement":
			newState.count--;
			return newState;
		default:
			return preState;
	}
};

// 初始state
const initialState = {
	count: 0
};

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<button
				onClick={() => {
					dispatch({ type: "decrement" });
				}}>
				-
			</button>
			{state.count}
			<button
				onClick={() => {
					dispatch({ type: "increment" });
				}}>
				+
			</button>
		</div>
	);
}
