const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.split(' ').map(Number));
const inform = input.slice(1 + n).map((line) => {
    const [r1, c1, r2, c2] = line.split(' ').map(Number);
    return [r1 - 1, c1 - 1, r2 - 1, c2 - 1];
});

const dx = [1, 0, -1, 0], dy = [0, 1, 0, -1];

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

function shiftBoundary(x1, y1, x2, y2) {
    const move = [x2 - x1, y2 - y1, x2 - x1, y2 - y1];
    const temp = grid[x1][y1];

    let [cx, cy] = [x1, y1];
    for (let dir = 0; dir < 4; dir++) {
        for (let i = 0; i < move[dir]; i++) {
            let [nx, ny] = [cx + dx[dir], cy + dy[dir]];
            if (nx === x1 && ny === y1) continue;

            grid[cx][cy] = grid[nx][ny];
            [cx, cy] = [nx, ny];
        }
    }

    grid[cx][cy] = temp;
}

function changeAvg(x1, y1, x2, y2) {
    const copy = grid.map((row) => [...row]);

    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            let [sum, cnt] = [copy[x][y], 1];

            for (let dir = 0; dir < 4; dir++) {
                const [nx, ny] = [x + dx[dir], y + dy[dir]];
                if (isRange(nx, ny)) {
                    sum += copy[nx][ny];
                    cnt++
                }
            }

            const avg = Math.floor(sum / cnt);
            grid[x][y] = avg;
        }
    }
}

for (let i = 0; i < q; i++) {
    const [x1, y1, x2, y2] = inform[i];

    shiftBoundary(x1, y1, x2, y2);
    changeAvg(x1, y1, x2, y2);
}

for (const row of grid) {
    console.log(row.join(' '));
}