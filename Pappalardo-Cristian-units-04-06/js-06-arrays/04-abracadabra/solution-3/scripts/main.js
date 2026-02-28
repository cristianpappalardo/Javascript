/**
 * Solution 3: regex replacement at exact position
 * Change the 4th letter of "Abracadabra" to "X".
 */

const word = "Abracadabra"
const updatedWord = word.replace(/^(.{3})./, "$1X")

console.log(updatedWord) // AbrXcadabra
