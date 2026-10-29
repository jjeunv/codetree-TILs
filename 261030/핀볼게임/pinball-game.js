const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function getSec(cx, cy, dir) {
    const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => Array(4).fill(false)));

    // console.log(cx, cy, dir);
    let sec = 1;
    while (true) {
        // console.log(cx, cy, dir);
        if (grid[cx][cy] === 1) {
            dir = 3 - dir;
        } else if (grid[cx][cy] === 2) {
            dir = 1 ^ dir;
        }
        const [nx, ny] = [cx + dx[dir], cy + dy[dir]];
        // console.log(nx, ny);
        sec++;

        if (!isRange(nx, ny) || visited[nx][ny][dir]) {
            return sec;
        }

        [cx, cy] = [nx, ny];
        visited[cx][cy][dir] = true;
    }
}

function simulate() {
    let dir = 1;
    let [cx, cy, cd] = [0, 0, 0];
    let maxSec = 0;

    for (let i = 0; i < 4 * n; i++) {
        maxSec = Math.max(maxSec, getSec(cx, cy, dir));
        let [nx, ny] = [cx + dx[cd], cy + dy[cd]];

        // console.log(cx, cy, nx, ny, cd, dir, getSec(cx, cy, dir));


        if (!isRange(nx, ny)) {
            cd = (cd + 1) % 4;
            dir = (dir + 1) % 4;
            continue;
        } else {
            [cx, cy] = [nx, ny];
        }
    }

    console.log(maxSec);
}

simulate();