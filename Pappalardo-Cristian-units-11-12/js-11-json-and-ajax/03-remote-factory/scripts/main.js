/**
 * @file main.js
 * @author Cristian Pappalardo
 * 03-Remote-factory exercise
 * 
 * ● Use jsonblob to store JSON data about cars and a car factory
● You can use as many blobs as you need. Decide the structure in a way to
reduce the amount of data you modify with HTTP requests
● Write an application that displays a factory with a list of cars
● Clicking on each car should display a collapsible panel with more
information about the car
● It should be possible to edit the car details
● Save the modified data to jsonblob with an HTTP request
● Whenever data is modified you should reload the new data from jsonblob
once the writing has finished
● You should handle all error cases in your application. If an HTTP request
fails, you should display a message to the user
● Your project should include a folder called ‘json’ with all the initial json files
that you upload to jsonblob (the initial state of your DB)
● Your readme (markdown) should include links to all the jsonblobs that you
are using as well as a list of their IDs
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


// Endpoint for jsonblob API
const endpoint = ' https://api.jsonblob.com';
fetch(endpoint, {
method: 'POST',
body: carJSON,
headers: {
'Content-Type': 'application/json'
}
})
.then(response => {
if (!response.status === 201) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error making POST request:', error));

fetch(endpoint, {
method: 'POST',
body: factoryJSON,
headers: {
'Content-Type': 'application/json'
}
})
.then(response => {
if (!response.status === 201) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error making POST request:', error));


/* let car = document.getElementById('car');
let factory = document.getElementById('factory');

let eventListener = (event) => {
    event.preventDefault();
    console.log('Car clicked');
    // Here you would add code to display the collapsible panel with more information about the car
}
car.addEventListener('click', eventListener);

let editButton = document.getElementById('edit-button'); */


