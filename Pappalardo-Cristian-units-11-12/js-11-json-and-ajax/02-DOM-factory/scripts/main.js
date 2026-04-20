/**
 * @file main.js
 * @author Crisian Pappalardo
 * 02-DOM-factory exercise
 * 
 * ● Write your cars and factory objects as JSON strings in a variable
 * ● Parse them with JSON.parse();
 * ● Write each of them to the DOM in a list
 *      ○ You should use a styled CSS <ul><li> list with no bullets
 *      ○ Don’t use <table>
 */


// Car object represented as a JSON string
const carJSON = `{
    "make": "Fiat",
    "model": "Punto",
    "year": 2020
}`;

// Factory object represented as a JSON string
const factoryJSON = `{
    "name": "Fiat Factory",
    "location": "Turin, Italy",
    "capacity": 1000
}`;

// Parse the JSON strings into JavaScript objects
const car = JSON.parse(carJSON);
const factory = JSON.parse(factoryJSON);

// Function to create a list item for a given key-value pair
function createListItem(key, value) {
    const li = document.createElement('li');
    li.textContent = `${key}: ${value}`;
    return li;
}

// Get the container elements for the car and factory lists
const carList = document.getElementById('car-list');
const factoryList = document.getElementById('factory-list');

// Populate the car list
for (const [key, value] of Object.entries(car)) {
    carList.appendChild(createListItem(key, value));
}

// Populate the factory list
for (const [key, value] of Object.entries(factory)) {
    factoryList.appendChild(createListItem(key, value));
}