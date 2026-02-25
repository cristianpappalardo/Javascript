/**
 * @author Cristian Pappalardo
 * @file main.js
 * Movie database Exercise
 * 
 * This script defines an array of movie objects, each containing a title, duration, and list of stars. 
 * It includes a function to print the details of a movie and demonstrates how to use it to display information about each movie in the array.
 */

movies = [
    {
        title: "The Shawshank Redemption",
        duration: 142,
        stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    },
    {
        title: "The Godfather",
        duration: 175,
        stars: ["Marlon Brando", "Al Pacino", "James Caan"]
    },
    {
        title: "The Dark Knight",
        duration: 152,
        stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    }
]

/**
 * This function takes an array of movie objects and prints the details of each movie in a formatted string.
 * @param {Array} movie 
 * logs the title, duration, and stars of the movie to the console
 */

function printMovie(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars.join(", ") + ".");
}

// Print the details of the first movie
printMovie(movies[0]);


// Loop through the movies array and print each movie's details
for (let i = 0; i < movies.length; i++) {
    printMovie(movies[i]);
}