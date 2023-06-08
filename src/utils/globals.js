import { config } from "dotenv";

config(".env.dev");

const Globals = {
	ELECTRON_RENDERER_URL:
		process.env.ELECTRON_RENDERER_URL || "http://127.0.0.1:5173/home",
	RESOLUTION_WIDTH: parseInt(process.env.RESOLUTION_WIDTH || "1024"),
	RESOLUTION_HEIGHT: parseInt(process.env.RESOLUTION_HEIGHT || "768")
};

export default Globals;
