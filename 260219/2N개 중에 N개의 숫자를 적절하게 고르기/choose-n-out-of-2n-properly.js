const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input[1].split(' ').map(Number);

let sum=0;
num.forEach((n)=>sum+=n);

function calc(num1){
    let num2 = sum-num1;
    return Math.abs(num1-num2);
}

let ans = Number.MAX_SAFE_INTEGER;

function solve(idx, cnt, sum){
    if(cnt===n){
        // console.log(sum)
        ans = Math.min(ans, calc(sum));
        return;
    }

    if(idx===2*n) return;

    solve(idx+1, cnt+1, sum+num[idx]);
    solve(idx+1, cnt, sum);
}

solve(0,0 , 0);

console.log(ans)