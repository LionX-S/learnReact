import { ReactNode } from "react";
import style from "./comp1.module.scss";
type Comp1Props = {
	children:ReactNode
}

const Comp1 = ({children}:Comp1Props):ReactNode => {
	return (
		<div className={style.box}>
			<p>Comp1内容</p>
			{children}
		</div>
	);
};

export default Comp1;
