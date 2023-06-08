import "./Main.css";
import MainMenuBar from "../partials/MainMenuBar";

function MainLayout(props) {
	return (
		<div id='displayer'>
			{props.children}
			<MainMenuBar />
		</div>
	);
}

export default MainLayout;
