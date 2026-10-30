const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.trim().split(' ').map(val => [Number(val)]));
const targets = input[1 + n].trim().split(' ').map(Number);

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function getNext(x, y) {
    const dx = [0, 1, 1, 1, 0, -1, -1, -1], dy = [1, 1, 0, -1, -1, -1, 0, 1];
    let maxNum = 0;
    let [cx, cy] = [x, y];

    for (let dir = 0; dir < 8; dir++) {
        const [tx, ty] = [x + dx[dir], y + dy[dir]];
        if (isRange(tx, ty)) {
            for (let i = 0; i < grid[tx][ty].length; i++) {
                if (maxNum < grid[tx][ty][i]) {
                    maxNum = grid[tx][ty][i];
                    [cx, cy] = [tx, ty];
                }
            }
        }
    }

    return [cx, cy];
}

function move(target) {
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            for (let i = 0; i < grid[x][y].length; i++) {
                if (grid[x][y][i] === target) {
                    // console.log(target, x, y)
                    const [nx, ny] = getNext(x, y);
                    // console.log(nx, ny)

                    grid[nx][ny] = grid[nx][ny].concat(grid[x][y].splice(i));
                    return;
                    // console.log(grid[nx][ny])
                }
            }
        }
    }
}
function simulate() {
    for (let i = 0; i < m; i++) {
        move(targets[i]);

        // for (const row of grid) {
        //     console.log(row);
        // }
        // console.log()
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(grid[i][j].length === 0 ? "None" : grid[i][j].reverse().join(' '));
        }
    }
}

simulate();