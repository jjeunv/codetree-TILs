const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const dp = Array.from({ length: n }, () => Array(n).fill(0));

dp[0][0] = num[0][0];
for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], num[i][0]);
    dp[0][i] = Math.max(dp[0][i - 1], num[0][i])
}

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        dp[i][j] = Math.max(Math.min(dp[i - 1][j], dp[i][j - 1]), num[i][j]);
    }
}

console.log(dp[n - 1][n - 1])