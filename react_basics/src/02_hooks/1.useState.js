import React, { useState } from "react";

export default function App() {
	const [name, setName] = useState("Jack");
	return (
		<div>
			{name}
			<button onClick={() => {
        setName('jerry')
      }}>更改</button>
		</div>
	);
}
