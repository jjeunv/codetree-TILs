const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const bombPos = [];
const bombType = Array.from(Array(n), () => Array(n).fill(0));
const bombed = Array.from(Array(n), () => Array(n).fill(false));
let ans = 0;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function bomb(x, y, bombType) {
    const bombShapes = [
        [],
        [[-1, 0], [-2, 0], [1, 0], [2, 0], [0, 0]],
        [[0, -1], [-1, 0], [1, 0], [0, 1], [0, 0]],
        [[-1, -1], [1, 1], [-1, 1], [1, -1], [0, 0]]
    ];

    for (let i = 0; i < 5; i++) {
        const [dx, dy] = bombShapes[bombType][i];
        const [nx, ny] = [x + dx, y + dy];
        if (inRange(nx, ny)) {
            bombed[nx][ny] = true;
        }
    }
}

function calc() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            bombed[i][j] = false;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (bombType[i][j]) {
                bomb(i, j, bombType[i][j]);
            }
        }
    }

    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (bombed[i][j]) {
                cnt++;
            }
        }
    }

    return cnt;
}

function findMaxArea(cnt) {
    if (cnt === bombPos.length) {
        ans = Math.max(ans, calc());
        return;
    }

    for (let i = 1; i <= 3; i++) {
        const [x, y] = bombPos[cnt];
        bombType[x][y] = i;
        findMaxArea(cnt + 1);
        bombType[x][y] = 0;
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
            bombPos.push([i, j]);
        }
    }
}

findMaxArea(0);
console.log(ans);