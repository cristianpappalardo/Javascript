/**
 * @file main.js
 * @author Cristian Pappalardo
 * mix-up exercise
 * 
 * Write a function, mixUp, that takes in two strings, and returns a single string with the first 2 characters of each input string swapped.
 */

/**
 * returns a single string with the first 2 characters of each input string swapped.
 * @param {string} str1 the first string to swap the first 2 characters of
 * @param {string} str2 the second string to swap the first 2 characters of
 * @returns the concatenated string with the first 2 characters of each input string swapped 
 */

function mixUp(str1, str2) {
    if (str1.length < 2 || str2.length < 2) {
        return "Both strings must have at least 2 characters.";
    }
    let newStr1 = str2.slice(0, 2).concat(str1.slice(2))
    let newStr2 = str1.slice(0, 2).concat(str2.slice(2))
    return newStr1.concat(" ", newStr2)
}

//test the function
console.log(mixUp("mix", "pod"))    //expected output: "pox mid"
console.log(mixUp("dog", "dinner"))     //expected output: "dig donner"
console.log(mixUp("a", "b"))    //expected output: "Both strings must have at least 2 characters."