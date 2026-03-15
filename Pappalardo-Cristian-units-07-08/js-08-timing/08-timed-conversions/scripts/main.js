/**
 * @file main.js
 * @author Cristian Pappalardo
 * timed conversions exercise
 * 
 * Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Then, use setInterval to print the conversion of temperatures from 0°C to 100°C every second. After reaching 100°C, stop the interval. Finally, implement the same functionality using setTimeout instead of setInterval.
 */

/**
 * Converts a temperature from Celsius to Fahrenheit.
 * @param {number} celsius the temperature in Celsius to convert to Fahrenheit 
 * @returns {number} the converted temperature in Fahrenheit
 */

// Temperature conversion function
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// Using setInterval
let tempInterval = 0;
const intervalId = setInterval(() => {
    console.log(`${tempInterval}°C = ${celsiusToFahrenheit(tempInterval)}°F`);
    tempInterval++;
    if (tempInterval > 100) {
        clearInterval(intervalId);
    }
}, 1000);

/**
 * 
 * @param {number} temp the current temperature in Celsius to print the conversion for and schedule the next print 
 * @returns {undefined} does not return anything, but prints the conversion and schedules the next print
 */

// Using setTimeout
function printTempsTimeout(temp) {
    if (temp > 100) return;
    console.log(`${temp}°C = ${celsiusToFahrenheit(temp)}°F`);
    setTimeout(() => printTempsTimeout(temp + 1), 1000);
}

// Uncomment the following line to run the setTimeout version:
// printTempsTimeout(0);