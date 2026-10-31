const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const heights = input.slice(1).map((line) => line.trim().split(' ').map(Number));
let visited = Array.from({ length: n }, () => Array(m).fill(false));
let minK = 101;
let maxCnt = 0;

function canGo(x, y, k) {
    return 0 <= x && x < n && 0 <= y && y < m && !visited[x][y] && heights[x][y] > k;
}

function dfs(x, y, k) {
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

    for (let dir = 0; dir < 4; dir++) {
        const [nx, ny] = [x + dx[dir], y + dy[dir]];

        if (canGo(nx, ny, k)) {
            visited[nx][ny] = true;
            dfs(nx, ny, k);
        }
    }
}
for (let k = 100; k > 0; k--) {
    visited = Array.from({ length: n }, () => Array(m).fill(false));
    let cnt = 0;

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            if (heights[x][y] > k && !visited[x][y]) {
                cnt++;
                visited[x][y] = true;
                dfs(x, y, k);
            }
        }
    }

    if (maxCnt <= cnt) {
        maxCnt = cnt;
        minK = k;
    }
}

if (maxCnt === 0) {
    console.log("1 0");
} else {
    console.log(minK, maxCnt);
}