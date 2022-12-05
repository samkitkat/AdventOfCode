const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

let data1 = data.replaceAll("X", "A").replaceAll("Y", "B").replaceAll("Z", "C")
const array = data1.split("\n")
let round;
let score = 0;

for(let i = 0; i < array.length; i++){

  round = array[i];
  
  if(round[2] == "A"){
    if(round[0] == "C"){
      score+=6
    }
    score+=1
  }
  else if(round[2] == "B"){
    if(round[0] == "A"){
      score+=6
    }
    score+=2
  }
  else if(round[2] == "C"){
    if(round[0] == "B"){
      score+=6
    }
    score+=3
  }
  
  if(round[0] == round[2]){
    score += 3;
  }
}

console.log(score)