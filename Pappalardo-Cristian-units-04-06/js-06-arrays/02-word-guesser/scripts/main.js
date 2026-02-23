/**
 * @author Cristian Pappalardo
 * @file main.js
 * Word Guesser Exercise
 * 
 * This is a word guessing game. 
 * The player will have to guess the word by suggesting letters within a certain number of guesses. 
 * The player will receive feedback on their guesses, and the game will end when the player either guesses the word correctly or runs out of guesses.
 */


const word = ['c', 'a', 't'];
const wordToGuess  = ['_', '_', '_'];
let maxGuesses = 6;

/** 
 * This function takes a letter as input and checks if it is in the word to guess.
 * If the letter is in the word, it updates the wordToGuess array to reveal the letter in the correct position(s).
 * @param {string} letter - The letter guessed by the player
 * logs the current state of the wordToGuess array to the console, showing the letters guessed so far
 * checks if the player has any guesses left, and if not, logs a game over message to the console 
*/

function guessWord(letter){
	console.log('So far you have guessed ' +wordToGuess);
	if (maxGuesses <=0){
		console.log('Game Over, you have no more guesses left!');
	}	
	if (word.indexOf(letter) == -1){
		console.log('no matches found');
		maxGuesses -= 1;
		return;
	}
	else{
		wordToGuess[word.indexOf(letter)] = letter;
		maxGuesses -= 1;
	}
}


// Test the function with some guesses
guessWord('a');
guessWord('b');
guessWord('c');
guessWord('d');
guessWord('e');
guessWord('f');
guessWord('g');


