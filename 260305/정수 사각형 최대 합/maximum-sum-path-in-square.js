const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const num = input.slice(1).map(line => line.split(' ').map(Number));

const arr = Array.from({length:n}, ()=>Array(n).fill(0));

arr[0][0] = num[0][0];

for(let i=1; i<n; i++){
    arr[0][i] = arr[0][i-1] + num[0][i];
}

for(let j=1; j<n; j++){
    arr[j][0] = arr[j-1][0] + num[j][0];
}

for(let i=1; i<n; i++){
    for(let j=1; j<n; j++){
        arr[i][j] = num[i][j] + Math.max(arr[i-1][j], arr[i][j-1]);
    }
}

console.log(arr[n-1][n-1]);