
const fs = require('fs');


const data = fs.readFileSync('./data.txt', 'utf8');
const line = data.split('\n');

let tempCal = 0;
let max = 0;

let calories = line.map(ln => parseInt(ln, 10))

for(let i = 0; i < calories.length; i++){

    if(isNaN(calories[i])){
        max = Math.max(tempCal, max);
        tempCal = 0;
    }
    else{
        tempCal = calories[i] + tempCal;
    }
}

console.log(max);



