/**
 * @author Cristian Pappalardo
 * @file array-methods.js 
 * print reverse exercise using array methods
 * 
 * Write a function, printReverse, that takes a string as an argument and logs the string in reverse order. 
 * For example, calling printReverse("Hello World") should log "dlroW olleH". 
 */


/** * Takes a string as an argument and returns the string in reverse order.
 * @param {string} str - The string to be reversed.
 * logs the reversed string.
 */

function printReverse(str) {
    const reversed = str.split("").reverse().join("");
    console.log(reversed);
}

// Test the function
printReverse("Hello World");