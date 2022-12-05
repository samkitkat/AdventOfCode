const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');
const line = data.split('\n');

const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
const filteredArray = (a, b) => a.filter(value => b.includes(value));
let pair1;
let count = 0;
let a;
let b;
let aa;
let bb;

for(let i = 0; i < line.length; i++){

    pair1 = line[i].split(',');
    a = pair1[0].split('-');
    b = pair1[1].split('-');

    aa = range(Number(a[0]), Number(a[1]))
    bb = range(Number(b[0]), Number(b[1]))

    if (filteredArray(aa, bb).length != 0){
        count++;
    }
    
    aa = [];
    bb = [];
}

console.log(count)