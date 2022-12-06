const fs = require('fs');

const line = fs.readFileSync('./data.txt', 'utf8');
let marker = '';

let part1 = 4;
//let part2 = 14; for part2 use this value instead

for(let i = 0; i < line.length; i++){
    if(marker.length != part1 && !marker.includes(line[i])){
        marker += line[i];
        if(marker.length == part1){
            console.log(marker)
            console.log(i+1)
            break;
        }
    }
    else{
        i = i - marker.length;
        marker = '';
    }
}

