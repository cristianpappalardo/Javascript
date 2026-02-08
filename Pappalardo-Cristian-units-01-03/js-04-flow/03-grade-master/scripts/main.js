export function assignGrade(numberScore) {
    if (numberScore >= 90) {
        return "A";
    } else if (numberScore >= 80) {
        return "B";
    } else if (numberScore >= 70) {
        return "C";
    } else if (numberScore >= 60) {
        return "D";
    } else {
        return "F";
    }
}


console.log(assignGrade(95)); // Output: "A"
console.log(assignGrade(85)); // Output: "B"
console.log(assignGrade(75)); // Output: "C"
console.log(assignGrade(65)); // Output: "D"
console.log(assignGrade(55)); // Output: "F"