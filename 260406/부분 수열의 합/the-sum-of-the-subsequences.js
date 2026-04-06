const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coin = input[1].split(' ').map(Number);

const dp = Array.from({ length: n }, () => Array(m + 1).fill(false));

for (let i = 0; i < n; i++) {
    dp[i][0] = true;
}

if (coin[0] <= m) {
    dp[0][coin[0]] = true
}


function isTrue() {
    if (dp[0][m]) return true
    for (let i = 1; i < n; i++) {
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


