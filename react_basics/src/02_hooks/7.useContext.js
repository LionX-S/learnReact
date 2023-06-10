import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

const GlobalContext = React.createContext();

export default function App() {
	const [films, setFilms] = useState([]);
	const [info, setInfo] = useState("");

	useEffect(() => {
		axios.get("/films.json").then((res) => {
			console.log(res);
			setFilms(res.data.data.films);
		});
	},[]);

	return (
		<GlobalContext.Provider
			value={{
				info: info,
				changeInfo: (value) => {
					setInfo(value);
				}
			}}>
			<div>
				{films.map((item) => {
					return (
						<Films
							film={item}
							key={item.filmId}></Films>
					);
				})}
				<Info info={info}></Info>
			</div>
		</GlobalContext.Provider>
	);
}

function Info() {
	const value = useContext(GlobalContext);
	return <div style={{ width: "400px", height: "100px" }}>{value.info}</div>;
}

function Films(props) {
	const { name, poster, synopsis } = props.film;
	const value = useContext(GlobalContext);
	return (
		<div
			onClick={() => {
				value.changeInfo(synopsis);
			}}>
			<img
				src={poster}
				style={{ width: "70px", height: "100px" }}></img>
			<span>{name}</span>
		</div>
	);
}
