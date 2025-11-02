const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let cnt=0;
let sum=0;
const s = input[input.length-1];

for(let i=1; i<input.length-1; i++){
    if(input[i][0]===s){
        cnt++;
        sum+=input[i].length;
    }
}

console.log(cnt, (sum/cnt).toFixed(2))