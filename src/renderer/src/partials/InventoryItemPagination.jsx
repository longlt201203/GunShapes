import { useRef, useState, useEffect } from "react";

function InventoryItemPagination() {
	const [currentCatagory, setCurrentCategory] = useState(null);
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef(null);
	const categories = [
		"Sort By Alphabet",
		"Sort by Date Obtained",
		"Sort by Rarity",
		"Sort by Type"
	];
	const categoryElements = categories.map((category, index) => (
		<a
			id={"Checkout-" + index}
			onClick={selectCategory}
			className={currentCatagory == index ? "category-selected" : ""}
		>
			{category}
		</a>
	));

	useEffect(() => {
		let handler = e => {
			if (!dropdownRef.current.contains(e.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handler);
	});

	function selectCategory(ev) {
		const element = ev.target;
		const id = element.id;
		setCurrentCategory(id.split("-")[1]);

		// element.classList.toggle("category-selected");
		// const index = id.split("-")[1];
		// console.log("Selected category: "+categories[index]);
	}

	return (
		<div className='inventoryItemPagination'>
			<button
				onClick={() => {
					setOpen(!open);
				}}
				className='dropbtn'
			>
				Sort Item
			</button>
			<div
				id='dropdown'
				className={`dropdownContent ${open ? "active" : "inactive"}`}
				ref={dropdownRef}
			>
				{categoryElements}
			</div>

			<button className='pre' onClick='previous()'>
				Previous
			</button>
			<p>1/100</p>
			<button className='next' onClick='next()'>
				Next
			</button>
		</div>
	);
}

export default InventoryItemPagination;
