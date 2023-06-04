function InventoryWeaponBox(props){
    const weapon = props.item;

    return(
        <div class="w-slot" id={props.id}></div>
    );
}

export default InventoryWeaponBox;