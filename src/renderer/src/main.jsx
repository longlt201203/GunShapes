import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Setting from "./pages/Setting";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageMapping from "./pages/pages";
import Game from "./pages/Game";

const router = createBrowserRouter([
	{
		path: PageMapping.Home.path,
		element: <Home />
	},
	{
		path: PageMapping.Inventory.path,
		element: <Inventory />
	},
	{
		path: PageMapping.Settings.path,
		element: <Setting />
	},
	{
		path: "/game/:id",
		element: <Game />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
