/**
 * @file main.js
 * @author Cristian Pappalardo
 * money exercise
 * 
 * Write a function, money, that takes a number as an argument and returns a string with the number and the word "dollar" or "dollars" depending on the number. 
 * For example, calling money(1) should return "1 dollar", while calling money(5) should return "5 dollars". 
 * If the number is 1000000, the function should return "1000000 dollars ;)".
 */

/**
 * Returns a string with the number and the word "dollar" or "dollars" depending on the number.
 * @param {number} amount 
 * @returns {string} The string with the number and the word "dollar" or "dollars" depending on the number.
 */

function money(amount) {
    if (amount === 1) {
        return `${amount} dollar`;
    }
    if (amount === 1000000) {
        return `${amount} dollars ;)`;

    }
    return `${amount} dollars`;
}


// Test the function
console.log(money(1)); // Output: "1 dollar"
console.log(money(5)); // Output: "5 dollars"
console.log(money(1000000)); // Output: "1000000 dollars ;)"