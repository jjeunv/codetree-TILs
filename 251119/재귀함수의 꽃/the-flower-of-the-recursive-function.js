const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here. 

function solve(n){
    if(n===0) return;
    process.stdout.write(n+" ");
    solve(n-1);
    process.stdout.write(n+" ")
}

solve(n)