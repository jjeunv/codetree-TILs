const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.

function solve(n){
    if(n<=1) return 1;
    return n*solve(n-1);
}

console.log(solve(N));