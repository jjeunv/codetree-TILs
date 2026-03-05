const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const arr = Array(n+1).fill(0);

arr[0] = 1;
arr[1] = 1;

for(let i=2; i<=n; i++){
    arr[i] = (arr[i-1]+ arr[i-2] *2) % 10007;
}

console.log(arr[n]);