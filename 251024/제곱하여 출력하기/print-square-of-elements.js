const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ");

let result ="";
for(let i=0; i<N; i++){
    result+= arr[i]**2;
    result+=" ";
}


console.log(result);