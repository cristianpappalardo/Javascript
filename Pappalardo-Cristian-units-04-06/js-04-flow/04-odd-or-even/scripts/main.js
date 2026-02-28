/**
 * @file main.js
 * @author Cristian Pappalardo
 * contains exercise
 *
 * Loop from 0 to 19 and print whether each number is odd or even.
 */

// Print odd/even status for numbers from 0 to 19
for (let index = 0; index < 20; index++) {
    if (index % 2 === 0) {
        console.log(index + " is even");
    } else {        
        console.log(index + " is odd");
    }
}