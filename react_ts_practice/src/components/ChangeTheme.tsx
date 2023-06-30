import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ChangeTheme = () => {
	const { state, dispatch } = useContext(ThemeContext);
	return (
		<>
			<button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
				change theme {state.theme}
			</button>
			<button
				onClick={() => dispatch({ type: "CHANGE_FONT_SIZE", payload: 4 })}>
				change fontsize {state.fontsize}
			</button>
		</>
	);
};

export default ChangeTheme;
