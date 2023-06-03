import "./Inventory.css";
import MainMenuBar from "../partials/MainMenuBar";

function InventoryLayout(props) {
    return (
        <div id="displayer">
            {props.children}
            <MainMenuBar/>
        </div>
    );
}

export default InventoryLayout;