const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// Please Write your code here.

let INT_MAX = Number.MAX_SAFE_INTEGER;

const dp = Array(m + 1).fill(INT_MAX);
dp[0] = 0;

for (let i = 1; i <= m; i++) {
    for (let j = n - 1; j >= 0; j--) {
        if (i >= arr[j]) {
            dp[i] = Math.min(dp[i], dp[i - arr[j]] + 1)
        }
    }
}

console.log(dp[m]===INT_MAX? -1 : dp[m]);