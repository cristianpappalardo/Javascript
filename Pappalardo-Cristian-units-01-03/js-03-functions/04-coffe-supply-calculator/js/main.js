function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    const totalNeeded = (maxAge - age) * 365 * amountPerDay;
    console.log("You will need " + totalNeeded + " units to last you until the ripe old age of " + maxAge);
}

calculateSupply(25, 3);
calculateSupply(40, 5);
calculateSupply(60, 2);


function calculateSupplyInLiters(age, amountPerDayInLiters) {

    const maxAge = 100;
    const totalNeededInLiters = (maxAge - age) * 365 * amountPerDayInLiters;
    roundedTotal = Math.ceil(totalNeededInLiters);
    console.log("You will need " + roundedTotal + " liters to last you until the ripe old age of " + maxAge);

}

calculateSupplyInLiters(25, 0.5);
calculateSupplyInLiters(40, 1.5);
calculateSupplyInLiters(60, 0.75);  