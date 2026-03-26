/**
 * @file main.js
 * @author Cristian Pappalardo
 * 01 Story exercise
 * 
 * @description This JavaScript file contains a function to generate a story based on user input for a noun, an adjective, and a person's name. 
 * It also includes an event listener for a button that triggers the story generation and displays the result in a designated area on the webpage.
 */

const button = document.getElementById('gen-button');
if (button) {
    button.addEventListener('click', makeStory);
}
    const nounInput = document.getElementById('noun');
    const adjectiveInput = document.getElementById('adjective');
    const personInput = document.getElementById('person');
    const storyElement = document.getElementById('story');

    /**
     * Checks if all required elements are present in the DOM.
     * @returns {boolean} true if all elements are present, undefined otherwise
     */

    function checkElements() {
        if (!nounInput || !adjectiveInput || !personInput || !storyElement) {
            console.error('One or more elements not found. Please check the HTML structure.');
            return;
        }
        return true;
        }

    /**
     * Generates a story based on user input.
     * @returns undefined if checkElements fails, otherwise displays the generated story in the designated area on the webpage.
     */
    
    function makeStory() {
        if (!checkElements()) {
            return;
        }

        const noun = nounInput.value;
        const adjective = adjectiveInput.value;
        const person = personInput.value;

        const story = `Once upon a time, there was a ${adjective} ${noun} named ${person}.`;
        storyElement.textContent = story;
    }




