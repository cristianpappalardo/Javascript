/**
 * @author Cristian Pappalardo
 * @file main.js
 * Enhanced Catwalk Exercise
 * 
 * @description This JavaScript file animates a cat walking across the screen with enhanced controls for starting, stopping, and adjusting the speed of the animation. 
 * The cat will loop back to the left side of the screen after exiting on the right, and users can interact with buttons to control the animation in real-time.
 */

window.addEventListener("load", function () {
	const cat = document.getElementById("cat");
	const startBtn = document.getElementById("start-btn");
	const fasterBtn = document.getElementById("faster-btn");
	const slowerBtn = document.getElementById("slower-btn");
	const stopBtn = document.getElementById("stop-btn");
	const info = document.getElementById("info");

	let intervalId = null;
	const tickMs = 50;
	const minSpeed = 1;
	const maxSpeed = 20;
	let speedPxPerTick = 5;

	/**
	 * Refreshes speed info text shown in the UI.
	 * @returns {void}
	 */
	function updateInfo() {
		info.textContent = "Current speed: " + speedPxPerTick + " px/tick";
	}

	/**
	 * Enables or disables controls based on movement and speed limits.
	 * @returns {void}
	 */
	function updateButtons() {
		const isMoving = intervalId !== null;

		startBtn.disabled = isMoving;
		stopBtn.disabled = !isMoving;
		fasterBtn.disabled = !isMoving || speedPxPerTick >= maxSpeed;
		slowerBtn.disabled = !isMoving || speedPxPerTick <= minSpeed;
	}

	/**
	 * Moves the cat image horizontally and loops it back when off-screen.
	 * @returns {void}
	 */
	function moveCat() {
		const currentLeft = parseInt(cat.style.left, 10) || 0;
		let nextLeft = currentLeft + speedPxPerTick;
		const rightLimit = window.innerWidth;

		// When the cat exits the right edge, restart from outside the left edge.
		if (nextLeft > rightLimit) {
			nextLeft = -cat.width;
		}

		cat.style.left = nextLeft + "px";
	}

	/**
	 * Starts the movement timer if it is not already active.
	 * @returns {void}
	 */
	function start() {
		if (intervalId !== null) {
			return;
		}

		// Keep one interval instance active at a time.
		intervalId = setInterval(moveCat, tickMs);
		updateButtons();
	}

	/**
	 * Stops the movement timer and updates controls.
	 * @returns {void}
	 */
	function stop() {
		if (intervalId === null) {
			return;
		}

		clearInterval(intervalId);
		intervalId = null;
		updateButtons();
	}

	/**
	 * Increases cat speed by one step up to maxSpeed.
	 * @returns {void}
	 */
	function faster() {
		if (speedPxPerTick < maxSpeed) {
			speedPxPerTick += 1;
			updateInfo();
			updateButtons();
		}
	}

	/**
	 * Decreases cat speed by one step down to minSpeed.
	 * @returns {void}
	 */
	function slower() {
		if (speedPxPerTick > minSpeed) {
			speedPxPerTick -= 1;
			updateInfo();
			updateButtons();
		}
	}

	// Wire up control buttons.
	startBtn.addEventListener("click", start);
	stopBtn.addEventListener("click", stop);
	fasterBtn.addEventListener("click", faster);
	slowerBtn.addEventListener("click", slower);

	// Initialize informational text and button states on page load.
	updateInfo();
	updateButtons();
});
