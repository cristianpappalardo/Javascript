/**
 * @file main.js
 * @author Cristian Pappalardo
 * Timed Calculator exercise
 * 
 * A timed calculator that performs a series of calculations on a number with a delay of 3 seconds between each calculation.
 */

// import the math library functions
import * as math from "../../../../Pappalardo-Cristian-units-01-03/js-03-functions/07-math-library/scripts/main.js";
/**
 * Takes a number and performs a series of calculations on it, with a delay of 3 seconds between each calculation.
 * @param {number} num the number to perform the calculations on 
 */
function timedCalculator(num) {
    setTimeout(() => {
        const half_num = math.halfNumber(num);
        setTimeout(() => {
                const squared_num = math.squareNumber(half_num);
            setTimeout(() => {
                    const area = math.areaOfCircle(squared_num);
                setTimeout(() => {
                    const percentage = math.percentof(area, squared_num);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

// Example usage:
timedCalculator(10);