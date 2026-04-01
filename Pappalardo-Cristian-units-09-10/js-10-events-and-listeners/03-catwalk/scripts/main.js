function catWalk() {
    const img = document.getElementsByTagName('img')[0];
    const currentLeft = parseInt(img.style.left) || 0;
    const newLeft = currentLeft + 10;
    img.style.left = newLeft + 'px';
    if (newLeft > window.innerWidth) {
        img.style.left = '-200px';
    }
}


setInterval(catWalk, 50);

function catWalkBackwards() {
    const img = document.getElementsByTagName('img')[1];
    const currentLeft = parseInt(img.style.left) || 0;
    const newLeft = currentLeft - 10;
    img.style.left = newLeft + 'px';
    if (newLeft < -200) {
        img.style.left = window.innerWidth + 'px';
    }
}


setInterval(catWalkBackwards, 50);


function catWalkMiddle() {
    const img = document.getElementsByTagName('img')[2];
    const currentLeft = parseInt(img.style.left) || 0;
    const newLeft = currentLeft + 10;
    img.style.left = newLeft + 'px';
    if (newLeft > window.innerWidth) {
        img.style.left = '-200px';
    }
}

setInterval(catWalkMiddle, 50);