/**
 * @file main.js
 * @author Cristian Pappalardo
 * Date Ago exercise
 * 
 * This exercise demonstrates how to calculate the day of the month that was a specified number of days ago from a given date using JavaScript's `Date` object.
 */

/**
 * Returns the day of the month that was a specified number of days ago from a given date.
 * @param {Date} date the date to go back from 
 * @param {number} days the number of days to go back 
 * @returns the day of the month that was the specified number of days ago from the given date
 */
function getDateAgo(date, days) {
    if (days < 0) {
        return 'Error: days cannot be negative';
    }
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result.getDate();
}

// Test cases
const today = new Date();
console.log('Today:', today.getDate());
console.log('1 day ago:', getDateAgo(today, 1));
console.log('2 days ago:', getDateAgo(today, 2));
console.log('30 days ago:', getDateAgo(today, 30));

// Test with a specific date
const testDate = new Date(2024, 5, 20); // June 20, 2024
console.log('Test date:', testDate.getDate());
console.log('5 days ago:', getDateAgo(testDate, 5));
console.log('10 days ago:', getDateAgo(testDate, 10));