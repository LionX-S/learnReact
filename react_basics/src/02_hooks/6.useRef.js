import React, { useRef, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
	const myInput = useRef();
  // useRef也可用于存储值
  const myCount = useRef(0);
	return (
		<div>
			<input ref={myInput}></input>
			<button
				onClick={() => {
					console.log("方法1", myInput.current.value);
          myCount.current++;
          setNumber(number+1);
				}}>
				新增
			</button>
      count:{number}-{myCount.current}
		</div>
	);
}
