const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const grid = input.slice(1).map(l => l.split(' ').map(Number));

const dp = Array.from({ length: n }, () => Array(n).fill(1000001));
dp[0][n - 1] = grid[0][n - 1];

for (let i = n - 2; i >= 0; i--) {
    dp[0][i] = dp[0][i + 1] + grid[0][i];
}

for (let i = 1; i < n; i++) {
    dp[i][n - 1] = dp[i - 1][n - 1] + grid[i][n - 1];
}

for (let i = 1; i < n; i++) {
    for (let j = n - 2; j >= 0; j--) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j + 1]) + grid[i][j]
    }
}

console.log(dp[n - 1][0])