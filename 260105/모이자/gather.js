const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const INT_MAX = Number.MAX_SAFE_INTEGER;

let minNum = INT_MAX;

for(let i=0; i<n; i++){
    let cur = 0;
    for(let j=0; j<n; j++){
        cur+= arr[j]*Math.abs(j-i);
    }
    minNum = Math.min(minNum, cur);
}

console.log(minNum)