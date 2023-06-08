import { Link } from "react-router-dom";

function MenuBarItem(props) {
	return (
		<Link to={props.page}>
			<button className='menu-bar-item'>{props.title}</button>
		</Link>
	);
}

export default MenuBarItem;
