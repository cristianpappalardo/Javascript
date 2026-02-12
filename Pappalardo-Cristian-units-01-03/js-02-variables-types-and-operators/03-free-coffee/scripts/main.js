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
