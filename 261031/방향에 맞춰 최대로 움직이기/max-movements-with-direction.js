const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));
const distances = input.slice(1 + n, 1 + n + n).map((line) => line.trim().split(' ').map(Number));
const [r, c] = input[1 + n + n].trim().split(' ').map(Number);
const dx = [0, -1, -1, 0, 1, 1, 1, 0, -1], dy = [0, 0, 1, 1, 1, 0, -1, -1, -1];
let ans = 0;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function solve(x, y, cnt) {
    // console.log(x, y, cnt);
    ans = Math.max(ans, cnt);

    const dir = distances[x][y];
    let step = 1;

    while (true) {
        let [nx, ny] = [x + dx[dir] * step, y + dy[dir] * step];
        // console.log(x, y, nx, ny)
        // // if (inRange(nx, ny)) {
        // //     console.log(numbers[nx][ny], numbers[x][y], numbers[nx][ny] <= numbers[x][y])
        // // }

        if (!inRange(nx, ny)) return;

        if (numbers[nx][ny] <= numbers[x][y]) {
            step++;
            continue;
        };

        solve(nx, ny, cnt + 1);
        step++;
    }
}

solve(r - 1, c - 1, 0);
console.log(ans);