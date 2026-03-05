const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const arr = Array.from({length:n}, ()=>Array(n).fill(0));

arr[0][n-1] = num[0][n-1];

for(let i=n-2; i>=0; i--){
    arr[0][i] = arr[0][i+1] + num[0][i];
}

for(let i=1; i<n; i++){
    arr[i][n-1] = arr[i-1][n-1] + num[i][n-1];
}


for(let i=1; i<n; i++){
    for(let j=n-2; j>=0; j--){
        arr[i][j] = num[i][j] + Math.min(arr[i-1][j], arr[i][j+1]);
    }
}

console.log(arr[n-1][0])