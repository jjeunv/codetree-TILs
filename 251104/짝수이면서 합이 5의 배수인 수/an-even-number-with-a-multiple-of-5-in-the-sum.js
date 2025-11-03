const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function num(n){
    let sum = parseInt(n/10) + n%10;
    return n%2===0 && sum%5===0;
}

console.log(num(n)?"Yes":"No");