/**
 * @file main.js
 * @author Cristian Pappalardo
 * 01-Soundwave exercise for JS 12 In Depth Unit
 * 
 * Given the following array
let noisesArray = ['quack', 'sneeze', 'boom'];
Produce the following array, then print it to the console
['Quack!','qUack!!','quAck!!!','quaCk!!!!','quacK!!!!!','Sneeze!','sNeeze!!','snEeze!!!','sneEze!!!!
','sneeZe!!!!!','sneezE!!!!!!','Boom!','bOom!!','boOm!!!','booM!!!!']
 */

let noisesArray = ['quack', 'sneeze', 'boom'];

let resultArray = [];

noisesArray.forEach(noise => {
    for (let i = 0; i < noise.length; i++) {
        let modifiedNoise = noise.split('');
        modifiedNoise[i] = modifiedNoise[i].toUpperCase();
        resultArray.push(modifiedNoise.join('') + '!'.repeat(i + 1));
    }
});

console.log(resultArray);