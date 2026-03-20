let body = document.body;

body.style.fontFamily = 'Arial, sans-serif';

let nicknameSpan = document.getElementById('nickname');
nicknameSpan.textContent = 'Cri';
let favoritesSpan = document.getElementById('favorites');
favoritesSpan.textContent = 'pizza';
let hometownSpan = document.getElementById('hometown');
hometownSpan.textContent = 'Turin';

let listItem = document.querySelectorAll('li');

Array.from(listItem).forEach(item => item.classList.add('list-item'));

let myImage = document.createElement('img');

myImage.src = './assets/images/myself.jpg';
myImage.alt = 'Photo of Cristian';
myImage.style.width = '50%';
myImage.style.height = '50%';

document.body.appendChild(myImage);

//adding css

const link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './styles/style.css';

setTimeout(() => {
    document.head.appendChild(link);
}, 4000);