/**
 * @file main.js
 * @author Cristian Pappalardo
 * Dog Age Calculator Exercise
 * 
 * This program defines a function to calculate a dog's age in dog years based on its age in human years and a conversion rate.
 * The function is then called with different ages and conversion rates to demonstrate its functionality.
 */

/**
 * This function calculates a dog's age in dog years based on its age in human years and a conversion rate.
 * @param {number} ageInHumanYears - The age of the dog in human years
 * @param {number} conversionRate - The conversion rate to calculate dog years (e.g., 7 for the common rule)
 * @returns {string} A message indicating the dog's age in dog years
 */

function calculateDogAge(ageInHumanYears, conversionRate) {
    console.log ("Your dog is " + (ageInHumanYears * conversionRate) + " years old in dog years!");
}

calculateDogAge(4, 7);
calculateDogAge(2, 5);
calculateDogAge(3, 6);