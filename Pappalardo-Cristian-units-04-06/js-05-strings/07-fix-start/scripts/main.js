/**
 * @file main.js
 * @author Cristian Pappalardo
 * fix-start exercise
 * 
 * Write a function, fixStart, that takes a string as an argument and returns a new string where all occurences of the first character have been replaced with "*", except for the first character itself.
 */

/**
 * return a new string where all occurences of the first character have been replaced with "*", except for the first character itself.
 * @param {string} str 
 * @returns a new string where all occurences of the first character have been replaced with "*", except for the first character itself.
 */

function fixStart(str) {
    if (str.length === 0) {
        return "The string must be more than one character long";
    }
    const first = str.charAt(0);
    const rest = str.slice(1).replaceAll(first, "*");
    return first + rest;
}

//test the function
console.log(fixStart("babble")); //expect output b*bb** 
console.log(fixStart("")); //expect output "The string must be more than one character long"
