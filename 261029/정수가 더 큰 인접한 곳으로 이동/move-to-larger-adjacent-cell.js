const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, r, c] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line) => line.split(' ').map(Number));
const dx = [0, 0, 1, -1], dy = [1, -1, 0, 0];

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function getPrioirty(x, y, num) {
    let [cx, cy] = [-1, -1];
    for (let dir = 0; dir < 4; dir++) {
        const [nx, ny] = [x + dx[dir], y + dy[dir]];
        if (isRange(nx, ny) && num < grid[nx][ny]) {
            [cx, cy] = [nx, ny];
        }
    }
    return [cx, cy];
}

function simulate() {
    const arr = [];
    let [cx, cy] = [r - 1, c - 1];
    while (isRange(cx, cy)) {
        arr.push(grid[cx][cy]);
        [cx, cy] = getPrioirty(cx, cy, grid[cx][cy]);
    }
    console.log(arr.join(' '));
}

simulate();