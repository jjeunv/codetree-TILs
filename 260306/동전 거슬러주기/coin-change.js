const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);

const dp = Array(m+1).fill(Number.MAX_SAFE_INTEGER);

dp[0] = 0;

for(let i=1; i<=m; i++){
    for(let j=0; j<n; j++){
        const coin = coins[j];
        if(coin>i) continue;
        if(dp[i-coin]===-1) continue;
        dp[i] = Math.min(dp[i-coin]+1, dp[i])
    }
}

console.log(dp[m]===Number.MAX_SAFE_INTEGER ? -1 : dp[m])