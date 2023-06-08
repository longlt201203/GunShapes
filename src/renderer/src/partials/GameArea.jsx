import { useEffect, useState } from "react";
import GameCanvas from "../components/GameCanvas/GameCanvas";
import { useParams } from "react-router-dom";

const demoMap = ["black", "blue", "red", "yellow"];

function GameArea() {
	const { id } = useParams();
	const [map, setMap] = useState(null);

	useEffect(() => {
		// Call API
		setMap(demoMap[id]);
	}, [id]);

	return <GameCanvas id='gameArea' map={map} />;
}

export default GameArea;
