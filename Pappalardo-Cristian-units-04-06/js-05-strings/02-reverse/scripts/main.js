/**
 * @file main.js
 * @author Cristian Pappalardo
 * print reverse exercise
 * 
 * Write a function, printReverse, that takes a string as an argument and returns the string in reverse order. 
 * For example, calling printReverse("Hello World") should return "dlroW olleH". 
 */

/**
 * Takes a string as an argument and returns the string in reverse order.
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */

function Reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test the function
console.log(Reverse("Hello World"));