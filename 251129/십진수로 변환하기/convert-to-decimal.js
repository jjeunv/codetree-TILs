const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.

let res = 0;
const n = binaryStr.length;
for(let i=0; i<n; i++){
    res+=2**(n-i-1)*binaryStr[i]
}

console.log(res)