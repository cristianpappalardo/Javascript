/**
 * @file main.js
 * @author Cristian Pappalardo
 * verbing exercise
 * 
 * Return a modified version of the input string based on the following rules:
 * - If the string length is less than 3, return the original string.
 * - If the string ends with "ing", add "ly" to the end of the string.
 * - If the string does not end with "ing", add "ing" to the end of the string.
 */

/**
 * Return a modified version of the input string based on the following rules:
 * - If the string length is less than 3, return the original string.
 * - If the string ends with "ing", add "ly" to the end of the string.
 * - If the string does not end with "ing", add "ing" to the end of the string.
 * @param {string} str the string to be modified 
 * @returns {string} the modified string
 */

function verbing(str) {
    if (str.length < 3) {
        return str;
    }
    if (str.endsWith("ing")) {
        return str.concat("ly");
    }
    return str.concat("ing");
}

//test the function
console.log(verbing("swim")); //expect output "swimming"
console.log(verbing("swimming")); //expect output "swimmingly"
console.log(verbing("go")); //expect output "go"


