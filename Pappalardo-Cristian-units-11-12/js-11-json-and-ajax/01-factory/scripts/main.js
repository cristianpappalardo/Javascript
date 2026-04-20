/**
 * @file main.js
 * @author Cristian Pappalardo
 * 01-factory exercise
 * 
 * - Write car.json, a JSON that represents a car object
 * - Write a factory.json that represents a car factory
 * - Transform car.json into cars.json with 5 cars
 * - Cars should belong to a factory
 */

// Car object represented as a JSON
const car = {
    "make": "Fiat",
    "model": "Panda",
    "year": 2010,
    "avalableColors": ["red", "blue", "green", "black", "white"],
    "fuel": ["petrol", "diesel", "electric"],
    "factory": {
        "name": "Fiat Factory",
        "location": "Turin, Italy",
        "established": 1899
    },
    "features": {
        "airConditioning": true,
        "powerSteering": true,
        "abs": true,
        "sunroof": false
    }
}

// Log the car object to the console
console.log(car);

// Car factory represented as a JSON
const carFactory = {
    "name": "Fiat Factory",
    "location": "Turin, Italy",
    "established": 1899,
    "carsProduced": [
        {
            "make": "Fiat",
            "model": "Panda",
            "year": 2010
        }
    ],
    "productionCapacity": 100000,
    "employees": 5000,
    "contact": {
        "phone": "+39 011 1234567",
        "email": "fiat@fiat.com"
    },
    "hiring": true
}

// Log the car factory object to the console
console.log(carFactory);


const carModels = ["Panda", "500", "Tipo", "Punto", "Bravo"];
// Log the cars array to the console
console.log(cars);


// Transform car.json into cars.json with 5 cars
const cars = [];
for (let i = 0; i < 5; i++) {
    cars.push({
        "make": "Fiat",
        "model": carModels[i],
        "year": 2010,
        "factory": carFactory.name,
        "features": {
            "airConditioning": true,
            "powerSteering": true,
            "abs": true,
            "sunroof": false
        }
    });
}

// Log the cars array to the console
console.log(cars);


const 