/**
 * @file main.js
 * @author Cristian Pappalardo
 * print reverse exercise
 * 
 * Write a function, printReverse, that takes a string as an argument and logs the string in reverse order. 
 * For example, calling printReverse("Hello World") should log "dlroW olleH". 
 */

/**
 * Takes a string as an argument and returns the string in reverse order.
 * @param {string} str - The string to be reversed.
 * logs the reversed string.
 */

function printReverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}

// Test the function
printReverse("Hello World");