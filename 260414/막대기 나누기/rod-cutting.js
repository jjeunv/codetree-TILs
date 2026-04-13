const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        dp[i] = Math.max(dp[i], dp[j] + arr[i - j - 1])
    }
}

console.log(dp[n])