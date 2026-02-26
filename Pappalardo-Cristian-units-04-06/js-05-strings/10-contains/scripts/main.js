/**
 * @file main.js
 * @author Cristian Pappalardo
 * contains exercise
 * 
 * Write a function called aContainsB that takes in two strings, a and b, and returns true if string a contains string b, and false otherwise. 
 * Use the String.prototype.includes() method to check for the presence of string b within string a.
 */

/**
 * Returns true if string a contains string b, false otherwise.
 * @param {string} a 
 * @param {string} b 
 * @returns true if string a contains string b, false otherwise
 */

function aContainsB(a, b) {
    return a.includes(b)
}

// Test cases
console.log(aContainsB('hello world', 'world')) // true
console.log(aContainsB('hello world', 'goodbye')) // false
console.log(aContainsB('JavaScript', 'Script')) // true
console.log(aContainsB('JavaScript', 'script')) // false (case-sensitive)