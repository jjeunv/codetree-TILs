const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function solve(a,b){
    if(a>b){
        a+=25;
        b*=2;
    }else{
        a*=2;
        b+=25;
    }
    return [a,b];
}

[a,b] = solve(a,b);
console.log(a,b)