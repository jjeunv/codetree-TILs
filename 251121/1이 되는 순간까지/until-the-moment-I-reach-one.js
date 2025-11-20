const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function solve(n){
    if(n===1) return 0;
    if(n%2===0){
        return 1+solve(n/2);
    }else{
        return 1+solve(parseInt(n/3));
    }
}

console.log(solve(n))