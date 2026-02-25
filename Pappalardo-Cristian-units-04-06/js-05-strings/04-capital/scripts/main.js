/**
 * @file main.js
 * @author Cristian Pappalardo 
 * Capitalize exercise
 * 
 * Write a function, capital, that takes a string as an argument and returns the string with the first letter of each word capitalized. 
 * For example, calling capital("hello world") should return "Hello World".
 * Write a function, capital2, that takes a string as an argument and returns the string with the first letter of each word capitalized. 
 * For example, calling capital2("hello world") should return "Hello World".
 */


/**
 * Takes a string as an argument and returns the string with the first letter capitalized.
 * @param {string} str 
 * @returns {string} The string with the first letter capitalized.
 */

function capital(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test the function
console.log(capital("hello world")); // Output: "Hello world"
console.log(capital("javascript is fun"));  // Output: "Javascript is fun"
console.log(capital("pappalardo cristian"));  // Output: "Pappalardo cristian"

/**
 * Takes a string as an argument and returns the string with the first letter of each word capitalized.
 * @param {string} str 
 * @returns {string} The string with the first letter of each word capitalized.
 */

function capital2(str){
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// Test the function
console.log(capital2("hello world")); // Output: "Hello World"
console.log(capital2("javascript is fun"));  // Output: "Javascript Is Fun"
console.log(capital2("pappalardo cristian"));  // Output: "Pappalardo Cristian"