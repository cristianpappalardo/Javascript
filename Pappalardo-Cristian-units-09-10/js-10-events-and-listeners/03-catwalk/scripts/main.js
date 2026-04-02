/**
 * @file main.js
 * @author Cristian Pappalardo
 * 03 Catwalk exercise
 *
 * @description This JavaScript file animates three cats with different movement
 * behaviors using timed updates.
 */

/**
 * Moves the first cat from left to right.
 * When it reaches the right side of the screen, it restarts from the left.
 */
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

// Movement direction for variant 2: 1 means right, -1 means left.
let backwardCatDirection = 1;

/**
 * Moves the second cat back and forth between the left and right sides.
 * The direction changes when the cat reaches a screen boundary.
 */
function catWalkBackwards() {
    const img = document.getElementsByTagName('img')[1];
    const currentLeft = parseInt(img.style.left) || 0;
    const maxLeft = window.innerWidth - img.width;
    let newLeft = currentLeft + (10 * backwardCatDirection);

    if (newLeft >= maxLeft) {
        newLeft = maxLeft;
        backwardCatDirection = -1;
    } else if (newLeft <= 0) {
        newLeft = 0;
        backwardCatDirection = 1;
    }

    img.style.left = newLeft + 'px';
}


setInterval(catWalkBackwards, 50);

// State for variant 3 movement and middle pause behavior.
let middleCatDirection = 1;
let middleCatPaused = false;
let middleCatDidPause = false;
let middleCatOriginalSrc = '';


/**
 * Moves the third cat like variant 2, but when it reaches the middle
 * for the first time it changes image and pauses for 10 seconds.
 * After the pause, it restores the original image and continues moving.
 */
function catWalkMiddle() {
    const img = document.getElementsByTagName('img')[2];
    if (!middleCatOriginalSrc) {
        middleCatOriginalSrc = img.src;
    }

    if (middleCatPaused) {
        return;
    }

    const currentLeft = parseInt(img.style.left) || 0;
    const maxLeft = Math.max(window.innerWidth - img.width, 0);
    const middleLeft = Math.max(Math.floor((window.innerWidth - img.width) / 2), 0);
    let newLeft = currentLeft + (10 * middleCatDirection);

    const reachedMiddle = !middleCatDidPause &&
        middleCatDirection === 1 &&
        currentLeft <= middleLeft &&
        newLeft >= middleLeft;

    if (reachedMiddle) {
        img.style.left = middleLeft + 'px';
        img.src = 'https://placecats.com/millie/220/120';
        middleCatPaused = true;
        middleCatDidPause = true;

        setTimeout(function () {
            img.src = middleCatOriginalSrc;
            middleCatPaused = false;
        }, 10000);
        return;
    }

    if (newLeft >= maxLeft) {
        newLeft = maxLeft;
        middleCatDirection = -1;
    } else if (newLeft <= 0) {
        newLeft = 0;
        middleCatDirection = 1;
    }

    img.style.left = newLeft + 'px';
}

setInterval(catWalkMiddle, 50);