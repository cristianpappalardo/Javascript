/**
 * @file main.js
 * @author Cristian Pappalardo
 * cash register exercise
 * 
 * Write a function cashRegister(cart) that takes a shopping cart object. 
 * The object contains item names as keys and their prices as values. 
 * The function should return the total price of the shopping cart. 
 * Remember to convert the price strings to numbers before calculating the total.
 */

/**
 * Calculates the total price of all items in the cart.
 * @param {cartObject} cart 
 * @returns the total price of all items in the cart
 */
function cashRegister(cart) {
    let total = 0;
    for (let item in cart) {
        total += parseFloat(cart[item]);
    }
    return total;
}

// Example usage:
let cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

console.log(cashRegister(cartForParty)); // 60.55