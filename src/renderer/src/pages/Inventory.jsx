import InventoryLayout from "../layouts/InventoryLayout";
import itemImg_1 from "../assets/item-1.jpg";
import itemImg_2 from "../assets/item-2.jpg";

import InventorySlotDisplay from "../partials/inventorySlotDisplay";
import InventoryItemDisplay from "../partials/InventoryItemDisplay";


function Inventory() {
    return (
        <InventoryLayout>
        <InventoryItemDisplay/>
        <InventorySlotDisplay/>
        </InventoryLayout>
    );
}

export default Inventory;