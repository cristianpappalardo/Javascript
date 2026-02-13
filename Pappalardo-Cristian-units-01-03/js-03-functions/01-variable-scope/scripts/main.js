/**
 * @file main.js
 * @author Cristian Pappalardo
 * Variable Scope Exercise
 * 
 * This program demonstrates the difference between local and global variable scope in JavaScript.
 * The results are then displayed in the console.
 */

/**
 * This function adds two numbers and demonstrates local variable scope by declaring a variable within the function.
 * @param {number} num1 -the first number to be added 
 * @param {number} num2 -the second number to be added
 * logs the result of the addition to the console
 */

function addNumbersLocal(num1, num2) {
    let localResult = num1 + num2;
    return("The local result is: " + localResult);
}
addNumbersLocal(5, 7);
// console.log(localResult); // This will cause an error because localResult is not accessible outside the function

  /**
   * This function adds two numbers and demonstrates global variable scope by using a variable declared outside the function.
   * @param {number} num1 -the first number to be added 
   * @param {number} num2 -the second number to be added
   * @returns {number} The result of the addition
 */
let globalResult; // Declaring a global variable to store the result of the addition
function addNumbersGlobal(num1, num2) {
    globalResult = num1 + num2;
    return("The global result is: " + globalResult);
}
addNumbersGlobal(5, 7);
console.log(globalResult);

