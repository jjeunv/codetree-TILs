const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const s = input[input.length-1];


for(let i=0; i<input.length-1; i++){
    if(input[i][input[i].length-1]===s){
        console.log(input[i])
    }
}