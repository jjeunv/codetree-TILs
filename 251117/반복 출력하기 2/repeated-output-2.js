const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

function solve(n){
    if(n===0){
        return;
    }
    console.log('HelloWorld');
    solve(n-1);
}

solve(n);