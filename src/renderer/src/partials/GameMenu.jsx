import MenuBar from "../components/MenuBar/MenuBar";
import MenuBarItem from "../components/MenuBar/MenuBarItem";

function GameMenu() {
    return (
        <MenuBar id="main-menu-bar" className="bottom-right-menu">
            <MenuBarItem title="Map 1" page="/game/1" />
            <MenuBarItem title="Map 2" page="/game/2" />
            <MenuBarItem title="Map 3" page="/game/3" />
            <MenuBarItem title="Back" page="/" />
        </MenuBar>
    );
}

export default GameMenu;