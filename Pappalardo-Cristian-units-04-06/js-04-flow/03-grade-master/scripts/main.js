/**
 * @file main.js
 * @author Cristian Pappalardo
 * contains exercise
 *
 * Write a function called assignGrade that:
 * - takes a numeric score,
 * - returns a letter grade from A to F based on score ranges.
 */

/**
 * Converts a numeric score into a letter grade.
 * @param {number} numberScore - Numeric score to evaluate.
 * @returns {string} Letter grade corresponding to the score.
 */
export function assignGrade(numberScore) {
    if (numberScore >= 90) {
        return "A";
    } else if (numberScore >= 80) {
        return "B";
    } else if (numberScore >= 70) {
        return "C";
    } else if (numberScore >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test cases
console.log(assignGrade(95)); // Output: "A"
console.log(assignGrade(85)); // Output: "B"
console.log(assignGrade(75)); // Output: "C"
console.log(assignGrade(65)); // Output: "D"
console.log(assignGrade(55)); // Output: "F"