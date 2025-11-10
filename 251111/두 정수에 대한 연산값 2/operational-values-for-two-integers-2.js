const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

function solve(a,b){
    if(a<b){
        a+=10;
        b*=2;
    }else{
        a*=2;
        b+=10;
    }
    return [a,b];
}

[a,b]=solve(a,b);

console.log(a,b)