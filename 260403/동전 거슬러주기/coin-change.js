const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);

let C = Number.MAX_SAFE_INTEGER;
// Please Write your code here.
const dp = Array(m+1).fill(C);
dp[0] = 0;
for(let i=1; i<=m; i++){
    for(let j=0; j<n; j++){
        if(i-coins[j]<0) continue;
        if(dp[i-coins[j]]===C) continue;
        dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);
        // console.log(dp)
    } 
}

console.log(dp[m]===C?-1:dp[m])