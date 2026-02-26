/**
 * @file main.js
 * @author Cristian Pappalardo
 * notBad exercise
 * 
 * Return a modified version of the input string based on the following rules:
 * - If the string contains "not" followed by "bad", replace the whole "not...bad" substring with "good".
 * - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence
 */

/**
 *Returns a modified version of the input string based on the following rules:
 * - If the string contains "not" followed by "bad", replace the whole "not...bad" substring with "good".
 * - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence
 * @param {string} str 
 * @returns {string} a new string or the original string
 */

function notBad(str) {
    const notIndex = str.indexOf("not");
    const badIndex = str.indexOf("bad");

    // Both words must exist, and "bad" must come after "not"
    if (notIndex !== -1 && badIndex !== -1 && badIndex > notIndex) {
        return str.slice(0, notIndex) + "good" + str.slice(badIndex + 3);
    }

    return str;
}

//test the function
console.log("This dinner is not that bad!"); //expect output "This dinner is good!"
console.log("This movie is not so bad!"); //expect output "This movie is good!"
console.log("This dinner is bad!"); //expect output "This dinner is bad!"