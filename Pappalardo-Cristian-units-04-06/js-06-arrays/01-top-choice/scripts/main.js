/**
 * @author: Cristian Pappalardo
 * @file: main.js
 * Top Choice Exercise
 * 
 * This program defines a function called topChoice that takes an array of choices as an argument and logs the top three choices to the console in a formatted manner. 
 * The function uses a for loop to iterate through the choices and a switch statement to determine the appropriate ordinal suffix (1st, 2nd, 3rd) for each choice. 
 * Finally, the function is called with an example array of choices.
 */


/**
 * This function takes an array of choices and logs the top three choices to the console with their respective ordinal suffixes (1st, 2nd, 3rd).
 * @param {array} choices 
 * Logs the top three choices to the console in a formatted manner
 */



function topChoice(choices) {
    if (choices.length === 0) {
        console.log("No choices provided.");
        return;
    }
    for(let i = 0; i < choices.length; i++) {
        switch(i) {
            case 0:
                console.log("My 1st choice is " + choices[i]);
                break;
            case 1:
                console.log("My 2nd choice is " + choices[i]);
                break;
            case 2:
                console.log("My 3rd choice is " + choices[i]);
                break;
            default:
                console.log("My " + (i + 1) + "th choice is " + choices[i]);
        }
    }
}

// Example array of choices
const choices = ["red", "blue", "green"];
topChoice(choices);

// Example array of choices with more than three items
const moreChoices = ["pizza", "sushi", "tacos", "burgers"];
topChoice(moreChoices);

// Example array of choices with less than three items
const fewChoices = ["coffee", "tea"];
topChoice(fewChoices);

// Example array of choices many items
const manyChoices = ["apple", "banana", "orange", "grape", "melon", "peach", "pear", "plum", "kiwi", "mango", "strawberry", "blueberry", "raspberry", "blackberry", "watermelon"];
topChoice(manyChoices);

// Example array of choices with no items
const noChoices = [];
topChoice(noChoices);

// Example array of choices with non-string items
const mixedChoices = ["cat", 42, "dog", true, "bird"];