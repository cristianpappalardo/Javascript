/**
 * @file main.js
 * @author Cristian Pappalardo
 * Calculate Age Exercise
 * 
 * This program calculates the age of a person in a future year based on their birth year. 
 * It then displays the possible ages in the console, 
 * accounting for whether the person's birthday has passed in that future year.
 */

// Define the birth year and future year to calculate age
const birthYear = 2005
const futureYear = 2030

// Calculate age by subtracting birth year from future year
const ageInFuture = futureYear - birthYear

// Display the result (accounting for whether birthday has passed)
console.log("I will be either " + ageInFuture + " or " + (ageInFuture - 1) + " years old in " + futureYear)