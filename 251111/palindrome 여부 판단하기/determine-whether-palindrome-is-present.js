const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function solve(s){
    let arr = s.split("").reverse();
    return arr.join("");
}

if(str===solve(str)){
    console.log("Yes");
}else{
    console.log("No")
}