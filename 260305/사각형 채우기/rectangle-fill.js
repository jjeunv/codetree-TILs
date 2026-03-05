const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = Array(n+1).fill(-1);

arr[1] = 1;
arr[2] = 2;

for(let i=3; i<=n; i++){
    arr[i] = (arr[i-1] + arr[i-2]) % 10007;
}

console.log(arr[n]);