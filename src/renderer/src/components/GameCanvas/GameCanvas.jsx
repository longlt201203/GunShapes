import { useContext, useEffect, useRef, useState } from "react";
import GameApi from "../../../../game/game";
import { GameContext } from "../../layouts/GameLayout";

function GameCanvas(props) {
    const game = useContext(GameContext);
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const map = props.map;

    useEffect(() => {
        setCanvas(canvasRef.current);
        if (canvas != null) {
            game.setCtx(canvas.getContext("2d"));
            game.setMapDescription(map);
        }
    }, [map]);

    return (
        <canvas id={props.id} ref={canvasRef}></canvas>
    )
}

export default GameCanvas;