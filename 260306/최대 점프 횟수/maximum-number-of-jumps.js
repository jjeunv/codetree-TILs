const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

const dp = Array(n).fill(Number.MIN_SAFE_INTEGER);

dp[0] = 0;

for(let i=1; i<n; i++){
    for(let j=0; j<i; j++){
        if(dp[j]===Number.MIN_SAFE_INTEGER) continue;
        if(j+arr[j]>=i){
            dp[i] = Math.max(dp[i], dp[j]+1);
        }
    }
}



console.log(Math.max(...dp))