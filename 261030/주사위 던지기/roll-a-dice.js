const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, r, c] = input[0].trim().split(' ').map(Number);
const dirs = input[1].trim().split(' ');
const grid = Array.from({ length: n }, () => Array(n).fill(0));
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
const mappingDir = ['R', 'D', 'L', 'U'];

let [front, up, right] = [2, 1, 3];
let [cx, cy] = [r - 1, c - 1];
grid[cx][cy] = 7 - up;

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function rollDice() {
    for (i = 0; i < dirs.length; i++) {
        const dir = mappingDir.indexOf(dirs[i]);

        const [nx, ny] = [cx + dx[dir], cy + dy[dir]];

        if (!isRange(nx, ny)) continue;

        if (dir === 0) {
            [front, up, right] = [front, 7 - right, up];
        } else if (dir === 1) {
            [front, up, right] = [up, 7 - front, right];
        } else if (dir === 2) {
            [front, up, right] = [front, right, 7 - up];
        } else {
            [front, up, right] = [7 - up, front, right];
        }

        [cx, cy] = [nx, ny];
        grid[cx][cy] = 7 - up;
    }
}

function getSum() {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum += grid[i][j];
        }
    }
    return sum;
}

function simulate() {
    rollDice();
    console.log(getSum());
}

simulate();