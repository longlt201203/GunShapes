import { createContext } from "react";
import GameApi from "../../../game/game";
import GameMenu from "../partials/GameMenu";
import "./Game.css";

const GameContext = createContext();
export { GameContext };

function GameLayout(props) {
    const gameApi = GameApi();

    function handleStartGame() {
        gameApi.start();
    }

    function handleStopGame() {
        gameApi.stop();
    }

    return (
        <GameContext.Provider value={gameApi}>
            <button onClick={handleStartGame}>Start Game</button>
            <button onClick={handleStopGame}>Stop Game</button>
            <div id="displayer">
                {props.children}
                <GameMenu/>
            </div>
        </GameContext.Provider>
    );
}

export default GameLayout;