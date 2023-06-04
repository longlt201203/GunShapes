import InventoryItemBox from "./InventoryItemBox";
import ItemSlots from "./ItemSlot";
import InventoryItemPagination from "../partials/InventoryItemPagination";

import item_1 from "../assets/item-1.jpg"

function InventorySlotDisplay() {
    const count = 63;
    const inventoryItemBoxes = [];
    const itemImg_1 = item_1;
    const item1 = {
        id: "megumin",
        img: itemImg_1,
        count: 30,
        atk: 100,
        hp: 100,
        speed: 100
    }

    for(let i = 1; i <= count; i++) {
        if (i == 1){
            inventoryItemBoxes.push(<InventoryItemBox id={i} item={item1}/>);
        } else {
            inventoryItemBoxes.push(<InventoryItemBox id={i}/>);
        }
        
    }

    return (
        <div className="inventorySlotDisplay">
            <ItemSlots>
                {inventoryItemBoxes}
            </ItemSlots>
            <InventoryItemPagination/>
        </div>
    );
}   

export default InventorySlotDisplay;