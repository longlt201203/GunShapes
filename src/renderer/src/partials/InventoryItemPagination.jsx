function InventoryItemPagination(){
    return(
        <div className="inventoryItemPagination">
            <button className="pre" onclick="previous()">Previous</button>
            <p>1/100</p>
            <button className="next" onclick="next()">Next</button>
        </div>
    );
}

export default InventoryItemPagination;