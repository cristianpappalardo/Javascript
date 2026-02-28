/**
 * @file main.js
 * @author Cristian Pappalardo
 * contains exercise
 *
 * Print the multiplication tables from 0 to 10.
 */

// Print multiplication results for i (0..10) and j (1..10)
for (let i = 0; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}