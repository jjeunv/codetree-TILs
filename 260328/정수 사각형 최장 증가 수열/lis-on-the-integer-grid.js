const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const grid = input.slice(1).map(l => l.split(' ').map(Number));

const dp = Array.from({ length: n }, () => Array(n).fill(1));
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0]

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n
}

const pos = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        pos.push([grid[i][j], i, j])
    }
}

pos.sort((a, b) => a[0] - b[0]);

for (let [num, x, y] of pos) {
    for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir], ny = y + dy[dir];
        if (isRange(nx, ny) && grid[nx][ny] > num) {
            dp[nx][ny] = Math.max(dp[nx][ny], dp[x][y] + 1);
        }
    }
}

let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        ans = Math.max(ans, dp[i][j])
    }
}

console.log(ans);