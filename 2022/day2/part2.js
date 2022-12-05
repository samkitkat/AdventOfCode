const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

const array = data.split("\n")
let round;
let score = 0;

for(let i = 0; i < array.length; i++){

    round = array[i];
    
    if(round[0] == "A"){ //Rock
      if(round[2] == "X"){ //lose
        score+=3
      }
      else if(round[2] == "Y"){ //draw
        score+=4
      }
      else if(round[2] == "Z"){ //win
        score+=8
      }
    }
    else if(round[0] == "B"){ //Paper
      if(round[2] == "X"){
        score+=1
      }
      else if(round[2] == "Y"){
        score+=5
      }
      else if(round[2] == "Z"){
        score+=9
      }
    }
    else if(round[0] == "C"){ //Scissors
      if(round[2] == "X"){
        score+=2
      }
      else if(round[2] == "Y"){
        score+=6
      }
      else if(round[2] == "Z"){
        score+=7
      }
    }
  }

  console.log(score)