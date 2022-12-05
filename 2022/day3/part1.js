const fs = require('fs');
const data2 = fs.readFileSync('./data.txt', 'utf8');

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const line = data2.split("\n")

let line1;
let priority;
let total = 0;

for(let i = 0; i < line.length; i++){
  
  let split = line[i].length/2
  let splitted = line[i].split("")
  let half1 = splitted.splice(0, split)
  let half2 = splitted

  priority = half1.filter(value => half2.includes(value));

  total = letters.indexOf(priority[0]) + 1 + total
}

console.log(total)