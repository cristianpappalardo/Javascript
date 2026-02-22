/**
 * @author Cristian Pappalardo
 * @file main.js
 * Word Guesser Exercise
 * 
 * 
 */


/** 
 * 
 * 
 * 
*/

const word = ['c', 'a', 't'];
const wordToGuess  = ['_', '_', '_'];
let maxGuesses = 6;

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

guessWord('a');
guessWord('b');
guessWord('c');
guessWord('d');
guessWord('e');
guessWord('f');
guessWord('g');


