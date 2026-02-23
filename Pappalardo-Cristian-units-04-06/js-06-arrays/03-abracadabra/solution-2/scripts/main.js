/**
 * @author Cristian Pappalardo
 * @file main.js
 * Abracadabra Exercise solution 2
 * 
 * This program demonstrates how to replace a character in a string using split and join methods. The results are then displayed in the console.
 */

/**
 * This function replaces a character in a string at a specified index with a new character using the split and join methods.
 * @param {string} str the original string in which a character will be replaced
 * @param {number} index the index of the character to be replaced in the string
 * @param {string} newchar the new character that will replace the old character in the string
 * @returns {string} the modified string with the character replaced
 */

function replaceCharacterSplitAndJoin(str, index, newchar) {
    str = str.split('');
    str[index] = newchar;
    return str.join('');
}

// Test the function with some examples
console.log(replaceCharacterSplitAndJoin('Abracadabra', 3, 'x')); // Output: "abrxcadabra"
console.log(replaceCharacterSplitAndJoin('Abracadabra', 0, 'z')); // Output: "zbracadabra"
console.log(replaceCharacterSplitAndJoin('Abracadabra', 5, 'y')); // Output: "abracydabra"