const button = document.getElementById('gen-button');
if (button) {
    button.addEventListener('click', makeStory);
}
    const nounInput = document.getElementById('noun');
    const adjectiveInput = document.getElementById('adjective');
    const personInput = document.getElementById('person');
    const storyElement = document.getElementById('story');

    function checkElements() {
        if (!nounInput || !adjectiveInput || !personInput || !storyElement) {
            console.error('One or more elements not found. Please check the HTML structure.');
            return;
        }
        return true;
        }

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




