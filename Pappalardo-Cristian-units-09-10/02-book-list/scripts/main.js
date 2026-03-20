let books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt and David Thomas',
        alreadyRead: true
    },
    {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        alreadyRead: false
    }
];

books.forEach(book => {
    const bookElement = document.createElement('ul');
    bookElement.innerHTML = `<li><h3>${book.title}</h3><p>by ${book.author}</p></li>`;
    document.body.appendChild(bookElement);
});

