const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.

function solve(n){
    if(n===1) return 2;
    if(n===2) return 4;
    return (solve(n-1)*solve(n-2)) % 100;
}

console.log(solve(N))