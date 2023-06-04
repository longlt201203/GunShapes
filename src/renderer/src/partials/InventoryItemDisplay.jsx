import InventoryAvatar from "./InventoryAvatar";
import InventoryWeapon from "./InventoryWeapon";
import InventoryWeaponBox from "./InventoryWeaponBox";

function InventoryItemDisplay(){
    const count = 6;
    const inventoryWeaponBoxes = []; 

    for(let i = 1; i <= count; i++) {
        inventoryWeaponBoxes.push(<InventoryWeaponBox id={i}/>);
    }

    return (
        <div className="inventoryItemDisplayer">
            <InventoryWeapon>
                {inventoryWeaponBoxes}
            </InventoryWeapon>
            <InventoryAvatar/>
        </div>
    );
}

export default InventoryItemDisplay;