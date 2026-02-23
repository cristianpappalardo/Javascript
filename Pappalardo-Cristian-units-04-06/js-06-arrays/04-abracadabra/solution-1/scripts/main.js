/**
 * @author Cristian Pappalardo
 * @file main.js
 * Abracadabra Exercise solution 1
 * 
 * This program demonstrates how to replace a character in a string usign different methods. The results are then displayed in the console.
 */

/**
 * This function takes a string, an index, and a new character as input and replaces the character at the specified index in the string with the new character.
 * @param {string} str the original string in which a character will be replaced 
 * @param {number} index the index of the character to be replaced in the string
 * @param {string} newChar the new character that will replace the old character in the string
 * @returns {string} the modified string with the character replaced
 */

function replaceCharacter(str, index, newChar) {
    if (index < 0 || index >= str.length) return str;
    return str.slice(0, index) + newChar + str.slice(index + 1);
}

// Test the function with some examples
console.log(replaceCharacter('Abracadabra', 3, 'x')); // Output: "Abrxcadabra"
console.log(replaceCharacter('Abracadabra', 0, 'z')); // Output: "zbracadabra"
console.log(replaceCharacter('Abracadabra', 5, 'y')); // Output: "Abracydabra"

/**
 * This function takes a string, an index, and a new character as input and replaces the character at the specified index in the string with the new character using regular expressions.
 * @param {string} str the original string in which a character will be replaced
 * @param {number} index the index of the character to be replaced in the string
 * @param {string} newChar the new character that will replace the old character in the string
 * @returns {string} the modified string with the character replaced
 */

function replaceCharacterRegEx(str, index, newChar) {
    if (index < 0 || index >= str.length) return str;
    const regex = new RegExp(`(.{${index}}).`);
    return str.replace(regex, `$1${newChar}`);
}

// Test the function with some examples
console.log(replaceCharacterRegEx('Abracadabra', 3, 'x')); // Output: "Abrxcadabra"
console.log(replaceCharacterRegEx('Abracadabra', 0, 'z')); // Output: "zbracadabra"
console.log(replaceCharacterRegEx('Abracadabra', 5, 'y')); // Output: "Abracydabra"


/**
 * This function takes a string and a new character as input and replaces the first occurrence of the character 'a' in the string with the new character using regular expressions.
 * @param {string} str the original string in which a character will be replaced
 * @param {string} newChar the new character that will replace the first occurrence of 'a' in the string
 * @returns {string} the modified string with the character replaced
 */

function replaceCharacterLiteralRegEx(str, newChar) {
    return str.replace(/a/, newChar);
}

// Test the function with some examples
console.log(replaceCharacterLiteralRegEx('Abracadabra', 'x')); // Output: "Abrxcadabra"
console.log(replaceCharacterLiteralRegEx('Abracadabra', 'z')); // Output: "Abrzcadabra"
console.log(replaceCharacterLiteralRegEx('Abracadabra', 'y')); // Output: "Abrycadabra"