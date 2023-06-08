import "./MenuBar.css";

function MenuBar(props) {
	return (
		<div
			className={
				"menu-bar" + (props.className ? " " + props.className : "")
			}
			id={props.id}
		>
			{props.children}
		</div>
	);
}

export default MenuBar;
