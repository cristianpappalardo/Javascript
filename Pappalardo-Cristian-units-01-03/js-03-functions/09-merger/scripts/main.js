/**
 * @file main.js
 * @author Cristian Pappalardo
 * Merger Exercise
 */

/**
 * This function takes two parameters and merges them based on their types.
 * If both parameters are numbers, it returns their sum. 
 * If both parameters are strings, it concatenates them. 
 * If the parameters are of different types, it returns null.
 * @param {number|string} param1 - The first parameter to be merged
 * @param {number|string} param2 - The second parameter to be merged
 * @returns {number|string|null} - The merged result based on the types of the parameters, or null if they are of different types
 */

function merger(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else if (typeof param1 === 'string' && typeof param2 === 'string') {
        return param1 + param2;
    } else { return null; }
}