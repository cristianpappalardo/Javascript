/**
 * @file main.js
 * @author Cristian Pappalardo
 * Free Coffee Exercise
 * 
 * This program calculates the total number of cups of coffee a person will need 
 * to last them until a certain age based on their current age, maximum age, and daily coffee consumption.
 * The result is then displayed in the console.
 */

// Define personal coffee consumption data
const currentAge = 20;
const maxAge = 80;
const dailyCoffee = 1;

// Calculate total cups needed over remaining years
const cupsPerYear = dailyCoffee * 365;
const yearsRemaining = maxAge - currentAge;
const totalCupsNeeded = cupsPerYear * yearsRemaining;

// Display the total cups calculation
console.log("You will need " + totalCupsNeeded + " cups of coffee to last you until the age of " + maxAge + ".");
