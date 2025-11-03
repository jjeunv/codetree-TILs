const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.'

function gcd(a,b){
    if(b===0) return a;
    return gcd(b, a%b);
}

console.log(gcd(n,m));