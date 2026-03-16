/**
 * @file main.js
 * @author Cristian Pappalardo
 * clock exercise
 * 
 * Write a function printCurrentTime() that prints the current time to the console every second in the format HH:MM:SS.
 */

/**
 * Print the current time to the console every second in the format HH:MM:SS.
 */
function printCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Call the function every second
setInterval(printCurrentTime, 1000);