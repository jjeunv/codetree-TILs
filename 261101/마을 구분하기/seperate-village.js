const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(false));
let cnt = 0;
let arr = [];

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function canGo(x, y) {
    if (!inRange(x, y)) return false;

    if (grid[x][y] === 0) return false;

    if (visited[x][y]) return false;

    return true;
}

function dfs(x, y) {
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

    for (let dir = 0; dir < 4; dir++) {
        const [nx, ny] = [x + dx[dir], y + dy[dir]];
        if (canGo(nx, ny)) {
            visited[nx][ny] = true;
            cnt++;
            dfs(nx, ny);
        }
    }

}

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        if (grid[x][y] && !visited[x][y]) {
            visited[x][y] = true;
            cnt = 1;
            dfs(x, y);
            arr.push(cnt);
        }
    }
}

arr.sort((a, b) => a - b);
console.log(arr.length);
for (const val of arr) {
    console.log(val);
}