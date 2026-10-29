const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, r, c] = input[0].trim().split(' ').map(Number);
const grid = Array.from({ length: n }, () => Array(n).fill(0));
let t = 0;
grid[r - 1][c - 1] = 1;

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function addBomb(x, y) {
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
    const dis = Math.pow(2, t - 1);

    for (let dir = 0; dir < 4; dir++) {
        const [nx, ny] = [x + dx[dir] * dis, y + dy[dir] * dis];
        if (isRange(nx, ny)) {
            grid[nx][ny] = 1;
        }
    }
}

function explode() {
    const copy = grid.map((row) => [...row]);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (copy[i][j] === 1) {
                addBomb(i, j);
            }
        }
    }
}

function getNumOfBomb() {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            cnt += grid[i][j];
        }
    }
    return cnt;
}

function printGrid() {
    for (const row of grid) {
        console.log(row.join(' '));
    }
    console.log('----');
}

function simulate() {
    for (let i = 0; i < m; i++) {
        t++;
        explode();
    }

    console.log(getNumOfBomb());
}

simulate();