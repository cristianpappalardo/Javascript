/**
 * @file main.js
 * @author Cristian Pappalardo
 * Reading List Exercise
 * 
 * This script defines an array of book objects, each containing a title, author, and a boolean indicating whether the book has been read. 
 * It then iterates through the array and logs a message to the console for each book, indicating whether it has already been read or still needs to be read.
 */


books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        alreadyRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        alreadyRead: false
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        alreadyRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: false
    }
]


books.forEach(book => {
    if (book.alreadyRead) {
        console.log(`You already read "${book.title}" by ${book.author}.`);
    } else {
        console.log(`You still need to read "${book.title}" by ${book.author}.`);
    }
});