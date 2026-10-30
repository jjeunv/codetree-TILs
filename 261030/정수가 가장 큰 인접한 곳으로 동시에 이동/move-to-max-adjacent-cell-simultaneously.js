const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, t] = input[0].trim().split(' ').map(Number);
const numbers = input.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));
let positions = input.slice(1 + n).map((line) => line.trim().split(' ').map((val) => val - 1));
let marbles = Array.from({ length: n }, () => Array(n).fill(0));
const dx = [0, 0, 1, -1], dy = [1, -1, 0, 0];

function initialize() {
    for (const [r, c] of positions) {
        marbles[r][c] = 1;
    }
}

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function getNextPosition(x, y) {
    let maxNum = 0;
    let nx, ny;
    for (let dir = 0; dir < 4; dir++) {
        const [tx, ty] = [x + dx[dir], y + dy[dir]];
        if (isRange(tx, ty) && numbers[tx][ty] >= maxNum) {
            [nx, ny] = [tx, ty];
            maxNum = numbers[tx][ty];
        }
    }

    return [nx, ny];
}

function moveMarbles() {
    let copy = marbles.map((row) => [...row]);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (marbles[i][j] === 1) {
                copy[i][j]--;
                const [nx, ny] = getNextPosition(i, j);
                copy[nx][ny]++;
            }

        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (copy[i][j] > 1) {
                copy[i][j] = 0;
            }
        }
    }

    marbles = copy.map((row) => [...row]);
}

function getNumOfMarbles() {
    let num = 0;
    for (const row of marbles) {
        for (val of row) {
            if (val === 1) {
                num++;
            }
        }
    }

    return num;
}

function simulation() {
    initialize();

    // for (const row of marbles) {
    //     console.log(row.join(' '));
    // }
    // console.log('----')

    for (let i = 0; i < t; i++) {
        moveMarbles();
        // for (const row of marbles) {
        //     console.log(row.join(' '));
        // }
        // console.log('---')
    }

    console.log(getNumOfMarbles());
}

simulation();