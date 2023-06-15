import React, { FunctionComponent } from "react";

export default function App() {
	return (
		<div>
			<Child name='jack' />
		</div>
	);
}

interface ChildProps {
	name: string;
}
// function Child(props: ChildProps) {
//   return (
//     <div>child-{props.name}</div>
//   )
// }

// 第二种写法
// const Child:React.FC<ChildProps> = (props) => {
//   return (
//     <div>child-{props.name}</div>
//   )
// }

// 第三种写法，第二种为第三种的简化版
const Child: FunctionComponent<ChildProps> = (props) => {
	return <div>child-{props.name}</div>;
};
