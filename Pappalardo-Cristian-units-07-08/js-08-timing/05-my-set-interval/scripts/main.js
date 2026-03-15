/**
 * @file main.js
 * @author Cristian Pappalardo
 * MysetInterval exercise
 * 
 * This exercise demonstrates how to create a custom implementation of the `setInterval` function, called `mySetInterval`, which repeatedly executes a given function at specified time intervals. 
 * The `mySetInterval` function uses `setTimeout` to schedule the next execution of the provided function, allowing it to mimic the behavior of `setInterval`. 
 * In this example, the `hello` function is executed every 2 seconds for a total of 15 times.
 */

/**
 * Executes a function repeatedly with a specified time delay between each execution.
 * @param {function} func the function to execute repeatedly
 * @param {number} timeout the time in milliseconds between each execution of func
 */
function mySetInterval(func, timeout) {
    let maxExecutions = 15;
    let count = 0;

    function tick() {
        if (count >= maxExecutions) {
            return;
        }

        func();
        count += 1;
        setTimeout(tick, timeout);
    }

    setTimeout(tick, timeout);
}

// Example usage:
function hello() {
    console.log('hello');
}

mySetInterval(hello, 2000);