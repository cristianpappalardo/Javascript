/**
 * @file main.js
 * @author Cristian Pappalardo
 * Math Library Exercise
 */

/**
 * This function takes a number as input, calculates its square using the Math.pow() method, 
 * and logs the result to the console in a descriptive message.
 * @param {number} number - The number to be squared
 */

export function squareNumber(number) {
    const squared = Math.pow(number, 2);
    console.log("The result of squaring the number " + number + " is " + squared);
    return squared;
}

/**
 * This function takes a number as input, calculates its half, 
 * and logs the result to the console in a descriptive message.
 * @param {number} number - The number to be halved
 */

export function halfNumber(number) {
    const halved = number / 2;
    console.log("Half of " + number + " is " + halved);
    return halved;
}

/**
 * This function takes two numbers as input, calculates the percentage of the first number relative to the second,
 * and logs the result to the console in a descriptive message.
 * @param {number} num1 - The numerator
 * @param {number} num2 - The denominator
 */

export function percentof(num1, num2) {
    const percent = (num1 / num2) * 100;
    console.log(num1 + " is " + percent + "% of " + num2);
    return percent;
}

/**
 * This function takes the radius of a circle as input, calculates its area using the Math.PI and Math.pow() methods,
 * and logs the result to the console in a descriptive message.
 * @param {number} radius - The radius of the circle
 */

export function areaOfCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    const roundedArea = Math.round(area * 100) / 100;
    const displayArea = roundedArea.toFixed(2);
    console.log("The area for a circle with radius " + radius + " is " + displayArea + ".");
    return roundedArea;
}

