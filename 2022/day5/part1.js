
const fs = require('fs');

const data = fs.readFileSync('./data.txt', 'utf8');
const line = data.split('\n');

let array;
const storage = [1,5,9,13,17,21,25,29,33]
let cargo = [[],[],[],[],[],[],[],[],[]];

//making the matrix
for (let i = 0; i < storage.length - 1; i++){
    for (let j = 0; j < storage.length; j++){
        array = line[i].split('');
        cargo[j].push(array[storage[j]]);
    }
}

for (let i = 0; i < cargo.length; i++){
    cargo[i] = cargo[i].reverse().filter(x => x != ' ')
}

let array2 = [];
let t;
let temp = [];

for (let i = 10; i < line.length; i++){
    array2[i] = line[i].split(' ');
    array2[i] = array2[i].filter(x => !isNaN(parseInt(x)))

    t = array2[i].map(x => parseInt(x))

    temp = cargo[(t[1]-1)].slice(-(t[0]))
    cargo[(t[2]-1)] = cargo[(t[2]-1)].concat(temp.reverse())
    cargo[(t[1]-1)].splice(-(t[0]))
    temp = []
}

let ans = '';

for (let i = 0; i < cargo.length; i++){
    ans = ans + cargo[i].slice(-1);
}

console.log(ans)
//SHQWSRBDL