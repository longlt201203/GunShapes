function InventoryItemBox(props){
    const item = props.item;

    return(
        <div className="inventoryItemBox" id={props.id}>
              {item ? <div className="items" id="scythe">
                <img src={item.img} />
                <div className="number">
                  {item.count}
                </div>
                <div className="itemDetail">
                  <p>Atk: {item.atk}</p>
                  <p>hp: {item.hp}</p>
                  <p>speed: {item.speed}</p>
                </div>
              </div> : ""}
            </div>
    );
}

export default InventoryItemBox;