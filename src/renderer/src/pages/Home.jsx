import { Link } from "react-router-dom";
import icons from "../assets/icons.svg";
import MainLayout from "../layouts/MainLayout";

function Home() {
	return (
		<MainLayout>
			<h1>Home!</h1>
			<Link to='/game/0'>Start Game</Link>
		</MainLayout>
	);
}

export default Home;
