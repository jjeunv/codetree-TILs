const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map((line) => line.split(' ').map(Number));
const [r, c, m1, m2, m3, m4, dir] = input[1 + n].split(' ').map(Number);

const move = dir === 1 ? [m1, m2, m3, m4] : [m4, m3, m2, m1];
const dx = [-1, -1, 1, 1], dy = dir === 1 ? [1, -1, -1, 1] : [-1, 1, 1, -1];

const temp = grid[r - 1][c - 1];
let [cx, cy] = [r - 1, c - 1];

for (let d = 0; d < 4; d++) {
    for (let m = 0; m < move[d]; m++) {
        const [nx, ny] = [cx + dx[d], cy + dy[d]];
        grid[cx][cy] = grid[nx][ny];
        [cx, cy] = [nx, ny];
    }
}

if (dir === 1) {
    grid[r - 2][c - 2] = temp;
} else {
    grid[r-2][c] = temp;
}

for (const row of grid) {
    console.log(row.join(' '));
}