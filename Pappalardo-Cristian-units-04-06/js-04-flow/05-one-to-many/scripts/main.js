/**
 * @file main.js
 * @author Cristian Pappalardo
 * contains exercise
 *
 * Write a function called oneToMany that:
 * - takes a noun and a number,
 * - returns the noun in singular or plural form,
 * - handles irregular plurals such as "goose" and uncountable nouns such as "sheep".
 */

/**
 * Returns a noun phrase with correct singular/plural form based on the provided number.
 * @param {string} noun - Base noun to pluralize when needed.
 * @param {number} number - Quantity used to determine singular or plural form.
 * @returns {string} Quantity with properly inflected noun.
 */
function oneToMany(noun, number) {
    if (number === 1) {
        return "1 " + noun;
    } 
    else if (noun === "sheep") {
        return number + " " + noun;
    }
    else if (noun === "goose") {
        return number + " geese";
    }
    else {
        return number + " " + noun + "s";
    }
}

// Test cases
console.log(oneToMany("cat", 1)); // Output: "1 cat"
console.log(oneToMany("dog", 3)); // Output: "3 dogs"
console.log(oneToMany("sheep", 5)); // Output: "5 sheep"
console.log(oneToMany("goose", 2)); // Output: "2 geese"