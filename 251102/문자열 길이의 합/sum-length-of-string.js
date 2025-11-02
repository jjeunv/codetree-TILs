const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let sum=0;
let cnt=0;

for(let i=1; i<input.length; i++){
    sum+=input[i].length;
    if(input[i][0]==='a') cnt++;
}

console.log(sum,cnt);