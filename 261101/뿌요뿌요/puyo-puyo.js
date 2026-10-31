const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(false));
let cnt = 0;
let total = 0;
let maxArea = 0;

function canGo(x, y, num) {
    return 0 <= x && x < n && 0 <= y && x < n && !visited[x][y] && grid[x][y] === num;
}

function dfs(x, y, num) {
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

    for (let dir = 0; dir < 4; dir++) {
        const [nx, ny] = [x + dx[dir], y + dy[dir]];
        if (canGo(nx, ny, num)) {
            cnt++;
            visited[nx][ny] = true;
            dfs(nx, ny, num);
        }
    }
}

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        if (!visited[x][y]) {
            cnt = 1;
            visited[x][y] = true;
            dfs(x, y, grid[x][y]);

            if (cnt >= 4) {
                total++;
            }


            maxArea = Math.max(maxArea, cnt);
        }
    }
}

console.log(total, maxArea);