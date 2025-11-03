const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function printNum(n){
    let sum =0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum/10;
}

console.log(printNum(n))