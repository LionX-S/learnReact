import { ReactNode } from "react";

type CounterProps = {
	children: ReactNode;
	setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ children, setCounter }: CounterProps) => {
	return (
		<>
			<h1>{children}</h1>
			<button onClick={() => setCounter((prev) => prev + 1)}>+</button>
			<button onClick={() => setCounter((prev) => prev - 1)}>-</button>
		</>
	);
};

export default Counter;
