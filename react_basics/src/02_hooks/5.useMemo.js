import React, { useState,useMemo, useCallback, useEffect } from "react";
import axios from "axios";

export default function App() {
	const [operaList, setOperaList] = useState([]);
	const [bakCinemaList, setBakCinemaList] = useState([]);
	useEffect(() => {
		axios({
			url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=1571958",
			method: "get",
			headers: {
				"X-Client-Info":
					'{"a":"3000","ch":"1002","v":"5.2.1","e":"16858573876499187461980162"}',
				"X-Host": "mall.film-ticket.cinema.list"
			}
		}).then((response) => {
			setOperaList(response.data.data.cinemas);
			setBakCinemaList(response.data.data.cinemas);
		});
	}, []);
	const handleInput = useCallback(
		(e) => {
			const newList = bakCinemaList.filter((item) =>
				item.name.includes(e.target.value)
			);
			setOperaList(newList);
		},
		[bakCinemaList]
	);

	// const getCinemaList = useMemo(() => first, [second]);
	return (
		<div>
			<input onInput={handleInput}></input>
			{operaList.map((item) => (
				<dl key={item.cinemaId}>
					<dt>{item.name}</dt>
					<dd>{item.address}</dd>
				</dl>
			))}
		</div>
	);
}
