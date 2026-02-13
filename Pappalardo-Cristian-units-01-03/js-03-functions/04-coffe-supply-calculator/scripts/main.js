/**
 * @file main.js
 * @author Cristian Pappalardo
 * Coffee Supply Calculator Exercise
 */

/**
 * This function calculates the total number of cups of coffee a person will need to last them until the age of 100 based on their current age and daily coffee consumption.
 * @param {number} age - The current age of the person
 * @param {number} amountPerDay - The number of cups of coffee consumed per day
 * @returns {string} A message indicating the total number of cups needed until age 100
 */

function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    const totalNeeded = (maxAge - age) * 365 * amountPerDay;
    console.log("You will need " + totalNeeded + " cups of coffee to last you until the ripe old age of " + maxAge);
}
// Example usage:
calculateSupply(25, 3);
calculateSupply(40, 5);
calculateSupply(60, 2);

/**
 * This function calculates the total amount of coffee in liters a person will need to last them until the age of 100 based on their current age and daily coffee consumption in liters.
 * @param {number} age - The current age of the person
 * @param {number} amountPerDayInLiters - The amount of coffee consumed per day in liters
 * @returns {string} A message indicating the total amount of coffee needed in liters until age 100
 */

function calculateSupplyInLiters(age, amountPerDayInLiters) {

    const maxAge = 100;
    const totalNeededInLiters = (maxAge - age) * 365 * amountPerDayInLiters;
    const roundedTotal = Math.ceil(totalNeededInLiters);
    console.log("You will need " + roundedTotal + " liters of coffee to last you until the ripe old age of " + maxAge);

}

// Example usage:
calculateSupplyInLiters(25, 0.5);
calculateSupplyInLiters(40, 1.5);
calculateSupplyInLiters(60, 0.75);  