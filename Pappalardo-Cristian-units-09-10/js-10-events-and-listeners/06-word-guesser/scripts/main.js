/**
 * @author Cristian Pappalardo
 * @file main.js
 * Word Guesser Exercise
 */

const wordsPool = [
	"cat",
	"javascript",
	"browser",
	"banana",
	"coding",
	"window",
	"events"
];

const maxGuesses = 6;

const hangmanStages = [
` +---+
 |   |
	 |
	 |
	 |
	 |
=======`,
` +---+
 |   |
 O   |
	 |
	 |
	 |
=======`,
` +---+
 |   |
 O   |
 |   |
	 |
	 |
=======`,
` +---+
 |   |
 O   |
/|   |
	 |
	 |
=======`,
` +---+
 |   |
 O   |
/|\\  |
	 |
	 |
=======`,
` +---+
 |   |
 O   |
/|\\  |
/    |
	 |
=======`,
` +---+
 |   |
 O   |
/|\\  |
/ \\  |
	 |
=======`
];

const gameState = {
	hiddenWord: "",
	revealedWord: [],
	guessedLetters: [],
	remainingGuesses: maxGuesses,
	wins: 0,
	losses: 0,
	streak: 0,
	gameOver: false
};

const elements = {
	form: document.getElementById("guessForm"),
	letterInput: document.getElementById("letterInput"),
	wordDisplay: document.getElementById("wordDisplay"),
	resultMessage: document.getElementById("resultMessage"),
	guessesDisplay: document.getElementById("guessesDisplay"),
	remainingGuesses: document.getElementById("remainingGuesses"),
	scoreDisplay: document.getElementById("scoreDisplay"),
	newGameButton: document.getElementById("newGameButton"),
	hangmanArt: document.getElementById("hangmanArt")
};

/**
 * Picks a random word from the available pool.
 * @returns {string} The selected hidden word.
 */
function pickRandomWord() {
	const randomIndex = Math.floor(Math.random() * wordsPool.length);
	return wordsPool[randomIndex];
}

/**
 * Resets round-specific state and starts a new game round.
 * @returns {void}
 */
function startNewRound() {
	gameState.hiddenWord = pickRandomWord();
	gameState.revealedWord = Array.from(gameState.hiddenWord, () => "_");
	gameState.guessedLetters = [];
	gameState.remainingGuesses = maxGuesses;
	gameState.gameOver = false;
	render("New round started. Good luck!", "");
	elements.letterInput.value = "";
	elements.letterInput.focus();
}

/**
 * Validates raw input and ensures it is a single alphabetic letter.
 * @param {string} rawValue - Raw value typed by the user.
 * @returns {{valid: boolean, message?: string, value?: string}} Validation result object.
 */
function validateGuess(rawValue) {
	const value = rawValue.trim().toLowerCase();
	if (value.length !== 1) {
		return { valid: false, message: "Please insert exactly one character." };
	}

	if (!/^[a-z]$/.test(value)) {
		return { valid: false, message: "Only letters A-Z are allowed." };
	}

	return { valid: true, value };
}

/**
 * Applies one guessed letter to the current game state.
 * @param {string} letter - The validated lowercase letter to process.
 * @returns {void}
 */
function applyGuess(letter) {
	if (gameState.gameOver) {
		render("Round already finished. Start a new game.", "warn");
		return;
	}

	if (gameState.guessedLetters.includes(letter)) {
		render(`You already guessed "${letter}". Try another letter.`, "warn");
		return;
	}

	gameState.guessedLetters.push(letter);

	// Reveal all matching positions when the guess is correct.
	const hasMatch = gameState.hiddenWord.includes(letter);
	if (hasMatch) {
		Array.from(gameState.hiddenWord).forEach((currentLetter, index) => {
			if (currentLetter === letter) {
				gameState.revealedWord[index] = letter;
			}
		});
		render(`Nice! "${letter}" is in the word.`, "");
	} else {
		gameState.remainingGuesses -= 1;
		render(`No match for "${letter}".`, "warn");
	}

	checkEndOfRound();
}

/**
 * Checks win/loss conditions and updates score counters.
 * @returns {void}
 */
function checkEndOfRound() {
	if (!gameState.revealedWord.includes("_")) {
		gameState.wins += 1;
		gameState.streak += 1;
		gameState.gameOver = true;
		render(`You win! The word was "${gameState.hiddenWord}".`, "win");
		return;
	}

	if (gameState.remainingGuesses <= 0) {
		gameState.losses += 1;
		gameState.streak = 0;
		gameState.gameOver = true;
		gameState.revealedWord = Array.from(gameState.hiddenWord);
		render(`Game over! The word was "${gameState.hiddenWord}".`, "lose");
	}
}

/**
 * Renders all game UI pieces from the current state.
 * @param {string} message - Feedback message shown to the player.
 * @param {string} stateClass - Optional visual status class (win, lose, warn).
 * @returns {void}
 */
function render(message, stateClass) {
	elements.wordDisplay.textContent = gameState.revealedWord.join(" ");
	elements.guessesDisplay.textContent =
		gameState.guessedLetters.length > 0
			? gameState.guessedLetters.join(", ")
			: "None yet";
	elements.remainingGuesses.textContent = String(gameState.remainingGuesses);
	elements.scoreDisplay.textContent =
		`Wins: ${gameState.wins} | Losses: ${gameState.losses} | Streak: ${gameState.streak}`;

	// Advance visual hangman stage based on used guesses.
	const usedGuesses = maxGuesses - gameState.remainingGuesses;
	elements.hangmanArt.textContent = hangmanStages[usedGuesses];

	elements.resultMessage.textContent = message;
	elements.resultMessage.className = "result-message";
	if (stateClass) {
		elements.resultMessage.classList.add(stateClass);
	}

	elements.letterInput.disabled = gameState.gameOver;
}

// Submit event for form-based guessing.
elements.form.addEventListener("submit", (event) => {
	event.preventDefault();
	elements.letterInput.classList.remove("is-invalid");

	const validation = validateGuess(elements.letterInput.value);
	if (!validation.valid) {
		elements.letterInput.classList.add("is-invalid");
		render(validation.message, "warn");
		return;
	}

	applyGuess(validation.value);
	elements.letterInput.value = "";
	elements.letterInput.focus();
});

// Manual reset button for starting a new round.
elements.newGameButton.addEventListener("click", startNewRound);

// Keyboard shortcut: typing a letter submits it immediately.
document.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.ctrlKey || event.altKey || event.metaKey) {
		return;
	}

	const key = event.key.toLowerCase();
	if (!/^[a-z]$/.test(key) || gameState.gameOver) {
		return;
	}

	elements.letterInput.value = key;
	elements.form.requestSubmit();
});

// Initialize first playable round on page load.
startNewRound();


