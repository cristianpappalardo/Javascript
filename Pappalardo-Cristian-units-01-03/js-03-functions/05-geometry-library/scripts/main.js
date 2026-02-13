/**
 * @file main.js
 * @author Cristian Pappalardo
 * Geometry Library Exercise
 */

/**
 * This function calculates the circumference of a circle given its radius and logs the result to the console.
 * @param {number} radius - The radius of the circle
 */

function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
}

/**
 * This function calculates the area of a circle given its radius and logs the result to the console.
 * @param {number} radius - The radius of the circle
 */

function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area);
}