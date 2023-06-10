import React, { useContext, useReducer } from "react";

const reducer = (preState, actions) => {
	const newState = { ...preState };
	switch (actions.type) {
		case "changeA":
			newState.a = actions.payload;
			return newState;
		case "changeB":
			newState.b = actions.payload;
			return newState;

		default:
			return preState;
	}
};

const initialState = {
	a: "111",
	b: "222"
};
// useReducer 一般与useContext结合使用
const GlobalContext = React.createContext();

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<GlobalContext.Provider
			value={{
				state,
				dispatch
			}}>
			<div>
				<Child1></Child1>
				<Child2></Child2>
				<Child3></Child3>
			</div>
		</GlobalContext.Provider>
	);
}

function Child1() {
	const { dispatch } = useContext(GlobalContext);
	return (
		<div>
			Child1
			<button
				onClick={() => {
					dispatch({ type: "changeA", payload: '4444' });
				}}>
				改变child2
			</button>
			<button
				onClick={() => {
					dispatch({ type: "changeB", payload: '5555' });
				}}>
				改表child3
			</button>
		</div>
	);
}

function Child2() {
	const { state } = useContext(GlobalContext);
	return <div style={{ backgroundColor: "yellow" }}>child2-{state.a}</div>;
}

function Child3() {
	const { state } = useContext(GlobalContext);
	return <div style={{ backgroundColor: "green" }}>child3-{state.b}</div>;
}
