/**
 * @file main.js
 * @author Cristian Pappalardo
 * Oh no you don’t exercise
 * 
 * 
 */

/**
 * Simple function that logs a message to the console after a delay of 10 seconds.
 */
function useful() {
  console.log("I'm useful!");
}
// Set a timeout to call the useful function after 10 seconds and store the timer ID
const timerId = setTimeout(useful, 10000);

/**
 * Function that cancels the timer set by the setTimeout function after a delay of 5 seconds. Then it logs a message to the console indicating that the function has been cancelled.
 * @param {number} id of the timer to cancel
 */
function cancelTimer(id) {
  setTimeout(() => {
    clearTimeout(id);
    console.log("function cancelled");
  }, 5000);
}
// Call the cancelTimer function with the timer ID to cancel the useful function before it executes
cancelTimer(timerId);