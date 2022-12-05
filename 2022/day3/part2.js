const fs = require('fs');
const data2 = fs.readFileSync('./data.txt', 'utf8');

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const line = data2.split("\n")

let array1 = [];
let line1;
let priority;
let x = 0;
let total = 0;

for(let i = 0; i < line.length; i++){

  if(x==3){
    priority = array1[0].filter(value => array1[1].includes(value) && array1[2].includes(value));
    total = letters.indexOf(priority[0]) + 1 + total
    array1 = []
    x = 0
  }

  line1 = line[i].split("")
  array1.push(line1)
  x++
}

priority = array1[0].filter(value => array1[1].includes(value) && array1[2].includes(value));
total = letters.indexOf(priority[0]) + 1 + total
console.log(total)