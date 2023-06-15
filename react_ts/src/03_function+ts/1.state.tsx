import React, { useRef, useState } from "react";

export default function App() {
	const [name, setName] = useState<string>("jack");
	return (
		<div>
			{name.substring(0, 1).toUpperCase() + name.substring(1)}
			<button
				onClick={() => {
					setName('ferdy');
				}}>改名</button>
		</div>
	);
}
