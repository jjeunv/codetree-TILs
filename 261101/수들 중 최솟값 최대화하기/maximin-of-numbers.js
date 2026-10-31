const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
let ans = 0;
const col = Array(n).fill(false);

function choose(row, cnt, minVal) {
    if (cnt === n) {
        ans = Math.max(ans, minVal);
        return;
    }

    for (let i = 0; i < n; i++) {
        if (col[i]) continue;

        col[i] = true;
        choose(row + 1, cnt + 1, Math.min(minVal, grid[row][i]));
        col[i] = false;
    }
}

choose(0, 0, Number.MAX_SAFE_INTEGER);

console.log(ans)