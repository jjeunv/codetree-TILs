const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = Array(n+1).fill(0);

arr[2] = 1;
arr[3] = 1;

for(let i=4; i<=n; i++){
    arr[i] = arr[i-2]+arr[i-3];
}

console.log(arr[n]%10007);