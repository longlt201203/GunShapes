import "./Inventory.css";
import MainLayout from "./MainLayout";
import MainMenuBar from "../partials/MainMenuBar";

function InventoryLayout(props) {
	return (
		<MainLayout>
			<div className='inventoryLayout'>{props.children}</div>
		</MainLayout>
	);
}

export default InventoryLayout;
