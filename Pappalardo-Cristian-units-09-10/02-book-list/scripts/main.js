let books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        url: './assets/images/the-design-of-everyday-things.jpg'
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        url: './assets/images/the-most-human-human.jpg'
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt and David Thomas',
        alreadyRead: true,
        url: './assets/images/the-pragmatic-programmer.jpg'
    },
    {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        alreadyRead: false,
        url: './assets/images/clean-code.jpg'
    }
];

const pageNode = document.body;
const bookListElement = document.createElement('ul');

books.forEach(book => {
    const bookItemElement = document.createElement('li');
    bookItemElement.innerHTML = `<h3>${book.title}</h3><img src="${book.url}" alt="${book.title}" style="width: 20%; height: auto;"/><p>by ${book.author}</p>`;
    if (book.alreadyRead) {
        bookItemElement.classList.add('already-read');
    }
    else {
        bookItemElement.classList.add('not-read');
    }
    bookListElement.append(bookItemElement);
});

pageNode.append(bookListElement);

const link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './styles/style.css';


setTimeout(() => {
    document.head.appendChild(link);
}, 5000);