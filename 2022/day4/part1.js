const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');
const line = data.split('\n');

let range = 0;
let pair1;
let a;
let b;

for(let i = 0; i < line.length; i++){

    pair1 = line[i].split(',');
    a = pair1[0].split('-');
    b = pair1[1].split('-');

    if (Number(a[0]) <= Number(b[0]) && Number(a[1]) >= Number(b[1])){
        range++;
    }
    else if(Number(b[0]) <= Number(a[0]) && b[1] >= Number(a[1])){
        range++;
    }
}

console.log(range)