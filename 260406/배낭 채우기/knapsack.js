const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(l => l.split(' ').map(Number));
// console.log(arr[0])
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
    const [w, v] = arr[i - 1];
    for (let j = 1; j <= m; j++) {
        if (j >= w) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v)
        }
    }
}

console.log(dp[n][m])