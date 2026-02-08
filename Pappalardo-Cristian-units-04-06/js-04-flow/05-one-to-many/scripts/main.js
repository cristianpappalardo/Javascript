function oneToMany(noun, number) {
    if (number === 1) {
        return "1 " + noun;
    } 
    else if (noun === "sheep") {
        return number + " " + noun;
    }
    else if (noun === "goose") {
        return number + " geese";
    }
    else {
        return number + " " + noun + "s";
    }
}

console.log(oneToMany("cat", 1)); // Output: "1 cat"
console.log(oneToMany("dog", 3)); // Output: "3 dogs"
console.log(oneToMany("sheep", 5)); // Output: "5 sheep"
console.log(oneToMany("goose", 2)); // Output: "2 geese"