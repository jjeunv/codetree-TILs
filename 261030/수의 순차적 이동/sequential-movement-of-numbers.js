const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function switchNum(x, y) {
    let maxNum = 0;
    let nx, ny;
    const dx = [0, 1, 1, 1, 0, -1, -1, -1], dy = [1, 1, 0, -1, -1, -1, 0, 1];

    for (dir = 0; dir < 8; dir++) {
        const [tx, ty] = [x + dx[dir], y + dy[dir]];
        if (isRange(tx, ty) && maxNum < grid[tx][ty]) {
            [nx, ny] = [tx, ty];
            maxNum = grid[tx][ty];
        }
    }

    [grid[x][y], grid[nx][ny]] = [grid[nx][ny], grid[x][y]];
}

function move(num) {
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y] === num) {
                switchNum(x, y);
                return;
            }
        }
    }
}

function simulation() {
    for (let i = 0; i < m; i++) {
        for (let num = 1; num <= n * n; num++) {
            move(num);
        }
    }

    for (const row of grid) {
        console.log(row.join(' '));
    }
}

simulation();