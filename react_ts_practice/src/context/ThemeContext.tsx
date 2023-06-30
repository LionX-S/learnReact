import { ReactNode, createContext, useReducer } from "react";

type StateType = {
	theme: string;
	fontsize: number;
};

type ThemeType = {
  type:'CHANGE_THEME'
};

type FontSizeType = {
  type:'CHANGE_FONT_SIZE',
  payload: number
}
type ActionType = ThemeType | FontSizeType;

const INITIAL_STATE = {
	theme: "dark",
	fontsize: 16
};

const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case "CHANGE_THEME":
			return {
				...state,
				theme: state.theme === "dark" ? "light" : "dark"
			};
		case "CHANGE_FONT_SIZE":
			return {
				...state,
				fontsize: state.fontsize + action.payload
			};
		default:
			return state;
	}
};

// 创建context
export const ThemeContext = createContext<{
	state: StateType;
	dispatch: React.Dispatch<ActionType>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

// 创建provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};
