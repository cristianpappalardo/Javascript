export function squareNumber(number) {
    const squared = Math.pow(number, 2);
    console.log("The result of squaring the number " + number + " is " + squared);
    return squared;
}

export function halfNumber(number) {
    const halved = number / 2;
    console.log("Half of " + number + " is " + halved);
    return halved;
}

export function percentof(num1, num2) {
    const percent = (num1 / num2) * 100;
    console.log(num1 + " is " + percent + "% of " + num2);
    return percent;
}

export function areaOfCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    const roundedArea = Math.round(area * 100) / 100;
    const displayArea = roundedArea.toFixed(2);
    console.log("The area for a circle with radius " + radius + " is " + displayArea + ".");
    return roundedArea;
}

