const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let maxNum = 0;

for(let i=0; i<n; i++){
    for(let j=i+2; j<n; j++){
        maxNum = Math.max(maxNum, arr[i]+arr[j]);
    }
}

console.log(maxNum);