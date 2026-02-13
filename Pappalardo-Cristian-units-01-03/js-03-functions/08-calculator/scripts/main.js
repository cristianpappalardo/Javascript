/**
 * @file main.js
 * @author Cristian Pappalardo
 * Calculator Exercise
 */


// Importing functions from the math library
import * as math from "../../07-math-library/scripts/main.js";

/**
 * This function takes a number as input, performs a series of mathematical operations using the functions from the math library,
 * and logs the results to the console in a descriptive manner.
 * @param {number} num - The number to be processed through the calculator operations
 */

function calculator(num) {
    const half_num = math.halfNumber(num);
    const squared_num = math.squareNumber(half_num);
    const area = math.areaOfCircle(squared_num);
    const percentage = math.percentof(area, squared_num);
}

// Example usage:
calculator(4);
calculator(10);
calculator(20);