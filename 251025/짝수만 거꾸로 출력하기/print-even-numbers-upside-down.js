const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const num = input[1].split(" ").map(Number);

let result=[];

for(let i=0; i<n; i++){
    if(num[i]%2===0){
        result.push(num[i]);
    }
}

console.log(result.reverse().join(" "));