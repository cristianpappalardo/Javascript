/**
 * @file main.js
 * @author Cristian Pappalardo
 * 02 Calculate exercise
 * 
 * @description This JavaScript file contains functions to perform various mathematical calculations such as squaring a number, halving a number, calculating the percentage of one number relative to another, and calculating the area of a circle. It also includes event listeners for buttons that trigger these calculations and display the results in a designated area on the webpage.
 */


/**
 * This function takes a number as input, calculates its square using the Math.pow() method, 
 * and logs the result to the console in a descriptive message.
 * @param {number} number - The number to be squared
 */
function squareNumber(number) {
    const squared = Math.pow(number, 2);
    console.log("The result of squaring the number " + number + " is " + squared);
    return squared;
}

/**
 * This function takes a number as input, calculates its half, 
 * and logs the result to the console in a descriptive message.
 * @param {number} number - The number to be halved
 */
function halfNumber(number) {
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
function percentof(num1, num2) {
    const percent = (num1 / num2) * 100;
    console.log(num1 + " is " + percent + "% of " + num2);
    return percent;
}

/**
 * This function takes the radius of a circle as input, calculates its area using the Math.PI and Math.pow() methods,
 * and logs the result to the console in a descriptive message.
 * @param {number} radius - The radius of the circle
 */
function areaOfCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    const roundedArea = Math.round(area * 100) / 100;
    const displayArea = roundedArea.toFixed(2);
    console.log("The area for a circle with radius " + radius + " is " + displayArea + ".");
    return roundedArea;
}

// Get the body element to append new elements

const body = document.querySelector('body');
// Create input and button for squaring a number
const squareNumberInput = document.getElementById('square-input');
const squareNumberButton = document.getElementById('square-button');

// Create input and button for halving a number
const halfNumberLabel = document.createElement('label');
halfNumberLabel.textContent = 'Half of the number: ';
body.appendChild(halfNumberLabel);

const halfNumberInput = document.createElement('input');
halfNumberInput.type = 'number';
halfNumberInput.id = 'half-number';
body.appendChild(halfNumberInput);

const halfNumberButton = document.createElement('button');
halfNumberButton.textContent = 'Calculate Half';
body.appendChild(halfNumberButton);

// Create input and button for percentage calculation
const percentageLabel = document.createElement('label');
percentageLabel.textContent = 'Calculate percentage: ';
body.appendChild(percentageLabel);

const percentageInput1 = document.createElement('input');
percentageInput1.type = 'number';
percentageInput1.id = 'percentage1';
body.appendChild(percentageInput1);

const percentageInput2 = document.createElement('input');
percentageInput2.type = 'number';
percentageInput2.id = 'percentage2';
body.appendChild(percentageInput2);

const percentageButton = document.createElement('button');
percentageButton.textContent = 'Calculate Percentage';
body.appendChild(percentageButton);

// Create input and button for area of circle calculation
const circleAreaLabel = document.createElement('label');
circleAreaLabel.textContent = 'Area of the circle with radius: ';
body.appendChild(circleAreaLabel);

const circleAreaInput = document.createElement('input');
circleAreaInput.type = 'number';
circleAreaInput.id = 'circle-area';
body.appendChild(circleAreaInput);

const circleAreaButton = document.createElement('button');
circleAreaButton.textContent = 'Calculate Circle Area';
body.appendChild(circleAreaButton);

// Get the div to display the solution
const solutionDiv = document.getElementById('solution');
body.appendChild(solutionDiv);

// Event listeners for the buttons
squareNumberButton.addEventListener('click', () => {
    const number = parseFloat(squareNumberInput.value);
    squareNumber(number);
    solutionDiv.textContent = "The square of " + number + " is " + squareNumber(number);
});

halfNumberButton.addEventListener('click', () => {
    const number = parseFloat(halfNumberInput.value);
    halfNumber(number);
    solutionDiv.textContent = "Half of " + number + " is " + halfNumber(number);
});

percentageButton.addEventListener('click', () => {
    const num1 = parseFloat(percentageInput1.value);
    const num2 = parseFloat(percentageInput2.value);
    percentof(num1, num2);
    solutionDiv.textContent = num1 + " is " + percentof(num1, num2) + "% of " + num2;
});

circleAreaButton.addEventListener('click', () => {
    const radius = parseFloat(circleAreaInput.value);
    areaOfCircle(radius);
    solutionDiv.textContent = "The area of a circle with radius " + radius + " is " + areaOfCircle(radius);
});


