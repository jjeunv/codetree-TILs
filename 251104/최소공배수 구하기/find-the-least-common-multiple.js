const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

function gcd(a,b){
    if(b===0) return a;
    return gcd(b,a%b);
}

function lcm(a,b){
    return a*b/gcd(a,b);
}

console.log(lcm(n,m));