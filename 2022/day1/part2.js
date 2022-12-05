
const fs = require('fs');

const data = fs.readFileSync('./data.txt', 'utf8');
const line = data.split('\n');

let tempCal = 0;
let array = [];

let calories = line.map(ln => parseInt(ln, 10))

for(let i = 0; i < calories.length; i++){

    if(isNaN(calories[i])){
        array.push(tempCal);
        tempCal = 0;
    }
    else{
        tempCal = calories[i] + tempCal;
    }
}

array.sort().reverse();
console.log(array[0] + array[1] + array [2])
