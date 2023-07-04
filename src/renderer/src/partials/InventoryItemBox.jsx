import Draggable from "react-draggable";
import React, { useState } from "react";
import $ from 'jquery';

function InventoryItemBox(props) {

	$( function() {
		$(  ).draggable();
		$( props.id ).droppable({
		  drop: function( event, ui ) {
			$( this )
			  .addClass( "ui-state-highlight" )
			  .find( "p" )
				.html( "Dropped!" );
		  }
		});
	  } );

	const item = props.item;

	return (
			<div className='inventoryItemBox' id={props.id}>
			{item ? (
				<div className='items' id={item.id}>
					<img src={item.img}/>
					<div className='number'>{item.count}</div>
					<div className='itemDetail'>
						<p>Atk: {item.atk}</p>
						<p>hp: {item.hp}</p>
						<p>speed: {item.speed}</p>
					</div>
				</div>
			) : (
				""
			)}
		</div>
		
	);
}

export default InventoryItemBox;
