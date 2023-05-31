import "./MenuBar.css";

function MenuBar(props) {
    return (
        <div
            className="menu-bar"
            id={props.id}
        >
            {props.children}
        </div>
    );
}

export default MenuBar;