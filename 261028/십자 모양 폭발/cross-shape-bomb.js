const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map((line) => line.split(' ').map(Number));
const [r, c] = input[1 + n].split(' ').map(Number);

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function bomb(r, c) {
    let cnt = grid[r][c] - 1;
    grid[r][c] = 0;

    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

    for (let dir = 0; dir < 4; dir++) {
        let [cx, cy] = [r, c];
        for (let i = 0; i < cnt; i++) {
            let [nx, ny] = [cx + dx[dir], cy + dy[dir]];
            if (isRange(nx, ny)) {
                grid[nx][ny] = 0;
            } else {
                break;
            }
            [cx, cy] = [nx, ny];
        }
    }
}

function shift() {
    for (let i = 0; i < n; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            if (grid[j][i] !== 0) {
                temp.push(grid[j][i]);
            }
        }
        while (temp.length != n) {
            temp.unshift(0);
        }
        for (let j = 0; j < n; j++) {
            grid[j][i] = temp[j];
        }
    }
}

bomb(r - 1, c - 1);
shift();

for (const row of grid) {
    console.log(row.join(' '));
}
