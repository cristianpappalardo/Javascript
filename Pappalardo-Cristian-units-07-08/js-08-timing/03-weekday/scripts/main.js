/**
 * @file main.js
 * @author Cristian Pappalardo
 * Weekday exercise
 * 
 * This exercise demonstrates how to get the current weekday and print it in either Italian or English based on the provided language code. 
 * The function `getWeekDay` uses the JavaScript `Date` object to determine the current day of the week and then prints the corresponding abbreviation in the specified language.
 */

/**
 * This function takes a language code as an argument and prints the current weekday in the specified language.
 * @param {string} lang language to use for the weekday, it can be "it" for Italian or "eng" for English 
 * @returns the weekday in the specified language
 */
function getWeekDay(lang) {
    // Create a new Date object to get the current date and time
    const d = new Date;
    // Get the current day of the week as a number (0-6) where 0 represents Sunday and 6 represents Saturday
    const day = d.getDay();
    // Check the language code and print the corresponding weekday abbreviation based on the value of 'day'
    if (lang == 'it' || lang == 'IT') {
        switch (day) {
            case 0:
                console.log("DOM");
                break;
            case 1:
                console.log("LUN");
                break;
            case 2:
                console.log("MAR");
                break;
            case 3:
                console.log("MER");
                break;
            case 4:
                console.log("GIO");
                break;
            case 5:
                console.log("VEN");
                break;
            case 6:
                console.log("SAB");
                return;
            default:
                return;
        }
    }
    // If the language is anything other than Italian, it defaults to English
    switch (day) {
        case 0:
            console.log("SU");
            return;
        case 1:
            console.log("MO");
            return;
        case 2:
            console.log("TU");
            return;
        case 3:
            console.log("WE");
            return;
        case 4:
            console.log("TH");
            return;
        case 5:
            console.log("FR");
            return;
        case 6:
            console.log("SA");  
            return;
        default:
            return;
    }
}
// Call the getWeekDay function with "it" to print the weekday in Italian and with "eng" to print it in English
getWeekDay("it");
getWeekDay("eng");
getWeekDay("IT"); // Testing case insensitivity for Italian language code
getWeekDay("FR"); // Testing default case for unsupported language code, should print in English
