/**
 * @file main.js
 * @author Cristian Pappalardo
 * Temperature Conversion Exercise
 */

/**
 * This function converts a temperature from Celsius to Fahrenheit and logs the result to the console.
 * @param {number} celsius_temp - The temperature in Celsius to be converted
 */

function celsiusToFahrenheit(celsius_temp) {
    const fahrenheit = (celsius_temp * 9/5) + 32;
    console.log(celsius_temp + "°C is " + fahrenheit + "°F");
}

/**
 * This function converts a temperature from Fahrenheit to Celsius and logs the result to the console.
 * @param {number} fahrenheit_temp - The temperature in Fahrenheit to be converted
 */

function fahrenheitToCelsius(fahrenheit_temp) {
    const celsius = (fahrenheit_temp - 32) * 5/9;
    console.log(fahrenheit_temp + "°F is " + celsius + "°C");
}