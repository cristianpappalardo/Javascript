/**
 * @file main.js
 * @author Cristian Pappalardo
 * palindrome exercise
 * 
 * Write a function, isPalindrome, that takes a string as an argument and returns true if the string is a palindrome and false if it is not. 
 * A palindrome is a string that reads the same forward and backward. 
 */

import { Reverse } from "/Pappalardo-Cristian-units-04-06/js-05-strings/02-reverse/solution-using-array-methods/scripts/array-methods.js";

/**
 * Takes a string as an argument and returns true if the string is a palindrome and false if it is not.
 * @param {string} str 
 * @returns {boolean} true if the string is a palindrome and false if it is not.
 */

function isPalindrome(str) {
    if (Reverse(str) === str) {
        return true;
    }
    return false;
}

// Test the function
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("step on no pets"));
