/**
 * @file main.js
 * @author Cristian Pappalardo
 * 02-Babies exercise for JS 12 In Depth Unit
 * 
 * Create an array called babies. Then, create 4 baby objects with the following properties: name, months, noises (an array of sounds the baby makes), and favoriteFoods (an array of foods the baby likes). 
 * Add each baby object to the babies array. 
 * Finally, print each baby's key-value pairs to the console, and add
 * an outfit property to each baby object with details about their
 * shirt, pants, and shoes. 
 * Print the updated baby objects to the console.
 */


let babies = [];

// Baby 1
let baby1 = {
    name: "Lyla",
    months: 12,
    noises: ["gurgle", "sneeze"],
    favoriteFoods: ["apples", "bananas"]
};
babies.push(baby1);

// Baby 2
babies.push({
    name: "Mason",
    months: 8,
    noises: ["coo", "giggle"],
    favoriteFoods: ["carrots", "peas"]
});

// Baby 3
let baby3 = {};
baby3.name = "Olivia";
baby3.months = 10;
baby3.noises = ["babble", "laugh"];
baby3.favoriteFoods = ["sweet potatoes", "avocado"];
babies.push(baby3);

// Baby 4
babies.push({
    name: "Ethan",
    months: 6,
    noises: ["cry", "scream"],
    favoriteFoods: ["rice cereal", "pureed pears"]
});

// Print key-value pairs
babies.forEach(baby => {
    for (let key in baby) {
        console.log(`${key}: ${baby[key]}`);
    }
});

// Add outfit property
babies.forEach(baby => {
    baby.outfit = {
        shirt: "blue",
        pants: "green",
        shoes: "white"
    };
});

// Print babies with outfits
babies.forEach(baby => {
    console.log({
        name: baby.name,
        months: baby.months,
        noises: baby.noises,
        favoriteFoods: baby.favoriteFoods,
        outfit: baby.outfit
    });
});


