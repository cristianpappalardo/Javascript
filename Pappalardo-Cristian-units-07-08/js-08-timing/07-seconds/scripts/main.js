/**
 * @file main.js
 * @author Cristian Pappalardo
 * Seconds exercise
 * 
 * This exercise demonstrates how to calculate the number of seconds that have passed since the start of the current day and the number of seconds remaining until the start of the next day.
 */

/**
 * Returns the number of seconds passed since the start of today.
 * @returns seconds passed since start of today
 */
function getSecondsToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}

/**
 * Returns the number of seconds until the start of tomorrow.
 * @returns seconds until the start of tomorrow
 */
function getSecondsToTomorrow() {
    const now = new Date();
    const startOfTomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.floor((startOfTomorrow - now) / 1000);
}

// Example usage:
console.log(getSecondsToday());
console.log(getSecondsToTomorrow());