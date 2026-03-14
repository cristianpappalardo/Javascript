/**
 * @file main.js
 * @author Cristian Pappalardo
 * slow list exercise
 * 
 * This exercise shows different ways to print items from an array with a delay between each item. 
 * First solution uses setInterval to print food items every second, while the second solution uses setTimeout recursively to print book titles with a delay.
 */


/*
//using setInterval

// An array of food items to be printed
const foods = ['pizza', 'pasta', 'salad', 'soup', 'sandwich', 'burger', 'fries', 'steak', 'chicken', 'fish', 'rice', 'beans', 'bread', 'cheese', 'yogurt', 'ice cream', 'cake', 'cookies', 'pie', 'cereal', 'oatmeal', 'smoothie', 'juice', 'soda', 'coffee', 'tea', 'water', 'milk', 'beer', 'wine'];

let index = 0;
// Set an interval to print each food item every second
const intervalId = setInterval(() => {
    console.log(foods[index]);
    index++;
// If the index exceeds the length of the foods array, clear the interval to stop printing
    if (index >= foods.length) {
        clearInterval(intervalId);
    }
}, 1000);
*/

//using setTimeout

// An array of book titles to be printed
const books = [
    'To Kill a Mockingbird',
    '1984',
    'Pride and Prejudice',
    'The Great Gatsby',
    'Moby-Dick',
    'War and Peace',
    'The Catcher in the Rye',
    'The Hobbit',
    'Brave New World',
    'Crime and Punishment',
    'The Odyssey',
    'Jane Eyre',
    'Wuthering Heights',
    'The Lord of the Rings',
    'The Alchemist',
    'The Little Prince',
    'Fahrenheit 451',
    'Animal Farm',
    'Dracula',
    'Frankenstein',
    'The Kite Runner',
    'The Book Thief',
    'The Chronicles of Narnia',
    'The Da Vinci Code',
    'A Tale of Two Cities',
    'The Picture of Dorian Gray',
    'The Old Man and the Sea',
    'Don Quixote',
    'The Brothers Karamazov',
    'Les Miserables'
];

/**
 * Takes an index and uses it to iterate through the array, then prints each element of the array with a delay of 1 second between elements
 * @param {number} index used to iterate through the array 
 */
function printBooks(index = 0) {
    if (index < books.length) {
        console.log(books[index]);
        setTimeout(() => printBooks(index + 1), 1000);
    }
}

//test the function
printBooks();
