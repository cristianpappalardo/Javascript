/**
 * Solution 2: split + modify index + join
 * Change the 4th letter (index 3) of "Abracadabra" to "X".
 */

const word = "Abracadabra"
const letters = word.split("")
letters[3] = "X"
const updatedWord = letters.join("")

console.log(updatedWord) // AbrXcadabra
