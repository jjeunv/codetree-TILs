const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(false));

function canGo(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m && grid[x][y] && !visited[x][y];
}

function dfs(x, y) {
    if (x === n - 1 && y === m - 1) {
        console.log(1);
        process.exit(0);
    }

    const dx = [0, 1], dy = [1, 0];
    for (let dir = 0; dir < 2; dir++) {
        const [nx, ny] = [x + dx[dir], y + dy[dir]];
        if (canGo(nx, ny)) {
            visited[nx][ny] = true;
            dfs(nx, ny);
        }
    }
}

dfs(0, 0);
visited[0][0] = true;
console.log(0);