const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

function gcd(a,b){
    if(a%b===0) return b;
    return gcd(b,a%b);
}

function lcm(a,b){
    if(a>b){
    return a*b/gcd(a,b);
    }else{
        return a*b/gcd(b,a);
    }
}


function solve(n){
    if(n===0){
        return numbers[0];
    }
    return lcm(numbers[n], solve(n-1));
}

console.log(solve(n-1))