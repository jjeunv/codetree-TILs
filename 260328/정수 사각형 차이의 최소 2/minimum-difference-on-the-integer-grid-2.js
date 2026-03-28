const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const grid = input.slice(1).map(l => l.split(' ').map(Number));
const dp = Array.from({ length: n }, () => Array(n).fill(0));
const INT_MAX = Number.MAX_SAFE_INTEGER;

function initialize() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = 0;
        }
    }

    dp[0][0] = grid[0][0];

    for (let i = 1; i < n; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], grid[0][i]);
        dp[i][0] = Math.max(dp[i - 1][0], grid[i][0])
    }

    for (let i = 1; i < n; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], grid[0][i]);
        dp[i][0] = Math.max(dp[i - 1][0], grid[i][0])
    }

    for (let i = 0; i < n; i++) {
        console.log(dp[i]);
    }
    console.log()
}

function findMax(minValue) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < minValue) {
                dp[i][j] = INT_MAX;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        console.log(dp[i]);
    }
    console.log()
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(Math.min(dp[i - 1][j], dp[i][j - 1]), grid[i][j])
        }
    }

    return dp[n - 1][n - 1];
}

let ans = INT_MAX;
for (let minValue = 1; minValue <= Math.min(grid[0][0], grid[n - 1][n - 1]); minValue++) {
    initialize();

    const maxValue = findMax(minValue);

    if (maxValue === INT_MAX) continue;

    ans = Math.min(ans, maxValue - minValue);
    console.log(minValue, maxValue)
}

console.log(ans);
