/**
 * @file main.js
 * @author Cristian Pappalardo
 * Convert Temperature Exercise
 * 
 * This program converts temperatures between Celsius and Fahrenheit.
 * The results are then displayed in the console.
 */

// Convert Celsius to Fahrenheit using the formula: (C × 9/5) + 32
const celsiusTemperature = 25;
const convertedFahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

// Display the Celsius to Fahrenheit conversion
console.log(celsiusTemperature + "°C is equal to " + convertedFahrenheitTemperature + "°F");

// Convert Fahrenheit to Celsius using the formula: (F - 32) × 5/9
const fahrenheitTemperature = 77;
const convertedCelsiusTemperature = (fahrenheitTemperature - 32) * 5/9;

// Display the Fahrenheit to Celsius conversion
console.log(fahrenheitTemperature + "°F is equal to " + convertedCelsiusTemperature + "°C");