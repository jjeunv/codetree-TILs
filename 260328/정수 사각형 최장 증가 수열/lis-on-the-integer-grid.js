const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const grid = input.slice(1).map(l => l.split(' ').map(Number));

const dp = Array.from({ length: n }, () => Array(n).fill(-1));
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0]

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n
}

function findMax(x, y) {
    if (dp[x][y] !== -1) {
        return dp[x][y];
    }

    let best = 1;

    for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir], ny = y + dy[dir];
        if (isRange(nx, ny) && grid[x][y] < grid[nx][ny]) {
            best = Math.max(best, findMax(nx, ny) + 1)

        }
    }
    dp[x][y] = best;
    return best;
}

let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

        ans = Math.max(ans, findMax(i, j))
    }
}

console.log(ans);