const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coin = input[1].split(' ').map(Number);

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

dp[0][0] = true;


function isTrue() {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] = dp[i - 1][j]

            if (j >= coin[i]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - coin[i]]
            }
        }
        if (dp[i][m]) return true;
    }
}


console.log(isTrue() ? "Yes" : "No")


