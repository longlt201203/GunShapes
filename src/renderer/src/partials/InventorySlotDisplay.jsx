import InventoryItemBox from "./InventoryItemBox";
import ItemSlots from "./ItemSlot";
import InventoryItemPagination from "../partials/InventoryItemPagination";
import {useState} from "react";
import Draggable from 'react-draggable';
import $ from 'jquery';


import heartItemImg from "../assets/heart.jpg";
import bombItemImg from "../assets/bomb.jpg";
import bowItemImg from "../assets/bow.jpg";
import potionItemImg from "../assets/potion.jpg";
import trophyItemImg from "../assets/trophy.jpg";

function InventorySlotDisplay() {
    const [inventoryItems, setInventoryItems] = useState([
		{ id: 0, name: 'heart', img: heartItemImg, count: 30, atk: 100, hp: 100, speed: 100},
		{ id: 1, name: 'bomb' , img: bombItemImg , count: 30, atk: 100, hp: 100, speed: 100},
		]
	);

    const inventoryItemBoxes = [];
    
  		for (let i = 0; i < 63; i++) {
    		inventoryItemBoxes.push(<InventoryItemBox key = {i} item={inventoryItems[i]} />)
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