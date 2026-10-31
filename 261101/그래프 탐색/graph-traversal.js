const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const visited = Array(n + 1).fill(false);
const grid = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
let cnt = 0;

for (let i = 0; i < m; i++) {
    const [x, y] = arr[i];
    grid[x][y] = 1;
    grid[y][x] = 1;
}

function dfs(cur) {
    for (let i = 1; i <= n; i++) {
        if (grid[cur][i] && !visited[i]) {
            cnt++;
            visited[i] = true;
            dfs(i);
        }
    }
}

visited[1] = true;
dfs(1);

console.log(cnt)