import { aContainsB } from "/Pappalardo-Cristian-units-04-06/js-05-strings/10-contains/scripts/main.js";

function group(listOfNames, name) {
    if (aContainsB(listOfNames, name)) {
        return (`${name} IS part of the group`)
    }
    return (`${name} is NOT part of the group`)
}   


//test cases
console.log(group('Alice, Bob, Charlie', 'Bob')) // Bob IS part of the group
console.log(group('Alice, Bob, Charlie', 'Dave')) // Dave is NOT part of the group