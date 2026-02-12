// Define the circle's radius
const radius = 5;

// Calculate circumference using the formula: C = 2πr
const circunference = 2 * Math.PI * radius;

// Calculate area using the formula: A = πr²
const area = Math.PI * Math.pow(radius, 2);

// Display the circumference result
console.log("The circumference of a circle with radius " + radius + " is " + circunference.toFixed(2));

// Display the area result
console.log("The area of a circle with radius " + radius + " is " + area.toFixed(2));