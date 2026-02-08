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


console.log(helloWorld("en")); // Output: Hello, World!
console.log(helloWorld("es")); // Output: ¡Hola, Mundo!
console.log(helloWorld("fr"));  // Output: Bonjour, le monde!
console.log(helloWorld("de"));  // Output: Hello, World! (default case)