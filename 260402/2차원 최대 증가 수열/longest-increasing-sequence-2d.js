const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(l => l.split(' ').map(Number));

const dp = Array.from({ length: n }, () => Array(m).fill(-1));
dp[0][0] = 1;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < i; k++) {
            for (let l = 0; l < j; l++) {
                if(i===k || j===l) continue;
                if (dp[k][l] === -1) continue;
                if (grid[i][j] > grid[k][l]) {
                    dp[i][j] = Math.max(dp[i][j], dp[k][l] + 1)
                }
            }
        }
    }
} 

let ans = 0;

for (let row of dp) {
    ans = Math.max(ans,Math.max(...row))
}

console.log(ans);