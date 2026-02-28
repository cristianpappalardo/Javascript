/**
 * @file main.js
 * @author Cristian Pappalardo
 * contains exercise
 * 
 * Write a function called greaterNum that takes in two numbers as arguments and returns a string indicating which number is greater or if they are equal.
 */

/**
 * Takes two numbers as arguments and returns a string indicating which number is greater or if they are equal.
 * @param {number} num1 
 * @param {number} num2 
 * @returns String indicating which number is greater or if they are equal
 */

function greaterNum(num1,num2) {
  if (num1 > num2) {
    return num1 + " is greater than " + num2;
  } else if (num2 > num1) {
    return num2 + " is greater than " + num1;
  } else {
    return "The numbers are equal.";
  }
}

// Test cases
console.log(greaterNum(3, 5));
console.log(greaterNum(10, 2));
console.log(greaterNum(7, 7));