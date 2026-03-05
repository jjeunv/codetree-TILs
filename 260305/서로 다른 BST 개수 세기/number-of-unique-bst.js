const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = Array(n+1).fill(-1);

function solve(n){
    if(arr[n]!==-1){
        return arr[n];
    }

    if(n<=1){
        arr[n] = 1;
    }else{
        let sum = 0;
        for(let i=0; i<n; i++){
            sum+= solve(i)*solve(n-i-1);
        }
        arr[n] = sum;
    }
    return arr[n];
}

console.log(solve(n));