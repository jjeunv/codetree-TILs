const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function solve(n){
    if(n===1 || n===2) return 1;
    return solve(n-1)+solve(n-2);
}

console.log(solve(n))