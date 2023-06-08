function WindowApi() {
	let _bindKeyDownHandler = null;

	return {
		bindKeyDown: function (handler) {
			_bindKeyDownHandler = handler;
			window.addEventListener("keydown", _bindKeyDownHandler);
		},
		removeBindKeyDown: function () {
			window.removeEventListener("keydown", _bindKeyDownHandler);
		}
	};
}

function CanvasApi(ctx) {
	const _ctx = ctx;

	return {
		drawRect: function (x, y, width, height, color) {
			_ctx.fillStyle = color;
			_ctx.fillRect(x, y, width, height);
		}
	};
}

function GameApi() {
	let _windowAPI = WindowApi();
	let _fps = 30;
	let _ctx = null;
	let _mapDescription = null;
	let _interval = null;
	let _timeout = null;
	let _canvasAPI = null;
	let _isStarted = false;

	function handleKeyDown(e) {
		const key = e.key;
		console.log(`GameApi.handleKeyDown(${key})`);
		switch (key) {
			case "ArrowUp":
				break;
			case "ArrowDown":
				break;
			case "ArrowLeft":
				break;
			case "ArrowRight":
				break;
			default:
				break;
		}
	}

	return {
		setFPS: function (fps) {
			_fps = fps;
		},
		setCtx: function (canvasCtx) {
			_ctx = canvasCtx;
			_canvasAPI = CanvasApi(_ctx);
		},
		setMapDescription: function (map) {
			_mapDescription = map;
		},
		isReady: function () {
			return _ctx != null && _mapDescription != null;
		},
		isStarted: function () {
			return _isStarted;
		},
		draw: function () {
			const {} = _mapDescription;
			_ctx.fillStyle = _mapDescription;
			_ctx.fillRect(0, 0, _ctx.canvas.width, _ctx.canvas.height);
		},
		start: function (maxTime = 10000) {
			if (_isStarted) {
				console.log("Game is already started!");
				return;
			}
			if (!this.isReady()) {
				console.log("Game is not ready!");
				return;
			}
			this.draw();
			console.log("GameApi.start()");

			_canvasAPI.drawRect(10, 50, 10, 10, "red");
			_windowAPI.bindKeyDown(handleKeyDown);

			_interval = setInterval(() => {
				console.time("GameApi.start() - interval");
			}, 1000 / _fps);
			_timeout = setTimeout(() => clearInterval(_interval), maxTime);
			_isStarted = true;
		},
		updateFrame: function () {
			if (!_isStarted) {
				console.log("Game is not started!");
				return;
			}
			console.log("GameApi.updateFrame()");
		},
		stop: function () {
			if (!_isStarted) {
				console.log("Game is not started!");
				return;
			}
			console.log("GameApi.stop()");
			clearInterval(_interval);
			clearTimeout(_timeout);
			_windowAPI.removeBindKeyDown();
			_isStarted = false;
			this.clear();
		},
		clear: function () {
			console.log("GameApi.clear()");
			_ctx.clearRect(0, 0, _ctx.canvas.width, _ctx.canvas.height);
		}
	};
}

export default GameApi;
