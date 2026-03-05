const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = Array(n+1).fill(-1);

function solve(n){
    if(arr[n] !== -1){
        return arr[n];
    }

    if(n<=2){
        arr[n] = 1;
    }
    else{
        arr[n] = solve(n-1) + solve(n-2);
    } 

    return arr[n];
}

console.log(solve(n))