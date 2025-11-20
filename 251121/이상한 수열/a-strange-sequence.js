const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.

function solve(n){
    if(n<=2) return n;
    return solve(parseInt(n/3)) + solve(n-1);
}

console.log(solve(n))