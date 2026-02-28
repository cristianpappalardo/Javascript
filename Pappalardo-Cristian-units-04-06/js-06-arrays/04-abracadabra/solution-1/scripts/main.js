/**
 * Solution 1: slice + concatenation
 * Change the 4th letter (index 3) of "Abracadabra" to "X".
 */

const word = "Abracadabra"
const updatedWord = word.slice(0, 3) + "X" + word.slice(4)

console.log(updatedWord) // AbrXcadabra
