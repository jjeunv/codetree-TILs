const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

function solve(str){

    for(let i=0; i<str.length-1; i++){
        if(str[i]!==str[i+1]) return true;
    }
    return false;
}

console.log(solve(A)?"Yes":"No")