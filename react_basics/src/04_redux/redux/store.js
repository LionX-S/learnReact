import { legacy_createStore as createStore } from "redux";
// state
const initState = {
	isShow: true
};
// reducer
const reducer = (prevState = initState, action) => {
	switch (action.type) {
		case "show":
			return { ...prevState, isShow: true };
		case "hide":
			return { ...prevState, isShow: false };
		default:
			return prevState;
	}
};
// 创建store
const store = createStore(reducer);
// const store = writeCreateStore(reducer);
export default store;

// redux 原理 订阅发布模式
function writeCreateStore(reducer) {
	let list = [];
	let state = reducer(undefined, {});
	function subscribe(callback) {
		list.push(callback);
	}

	function dispatch(action={}) {
		state = reducer(state, action);
		for (let i in list) {
			list[i] && list[i]();
		}
	}

	function getState() {
		return state;
	}

	return {
		subscribe,
		dispatch,
		getState
	};
}
