/**
 * @author Cristian Pappalardo
 * @file array-methods.js 
 * print reverse exercise using array methods
 * 
 * Write a function, printReverse, that takes a string as an argument and returns the string in reverse order. 
 * For example, calling printReverse("Hello World") should return "dlroW olleH". 
 */


/** * Takes a string as an argument and returns the string in reverse order.
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */

export function Reverse(str) {
    return str.split("").reverse().join("");
}

// Test the function
console.log(Reverse("Hello World"));