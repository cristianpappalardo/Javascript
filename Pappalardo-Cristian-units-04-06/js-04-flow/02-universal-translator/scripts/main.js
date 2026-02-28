/**
 * @file main.js
 * @author Cristian Pappalardo
 * contains exercise
 *
 * Write a function called helloWorld that:
 * - takes a language code as input,
 * - returns "Hello, World!" translated for supported languages,
 * - falls back to English when the language code is not supported.
 */

/**
 * Returns a translated "Hello, World!" message based on the provided language code.
 * @param {string} languageCode - Language code such as "en", "es", or "fr".
 * @returns {string} Translated greeting, or the English default.
 */
function helloWorld(languageCode) {
    if (languageCode === "en") {
        return "Hello, World!";
    } else if (languageCode === "es") {
        return "¡Hola, Mundo!";
    } else if (languageCode === "fr") {
        return "Bonjour, le monde!";
    } else {
        return "Hello, World!";
    }
}

// Test cases
console.log(helloWorld("en")); // Output: Hello, World!
console.log(helloWorld("es")); // Output: ¡Hola, Mundo!
console.log(helloWorld("fr"));  // Output: Bonjour, le monde!
console.log(helloWorld("de"));  // Output: Hello, World! (default case)