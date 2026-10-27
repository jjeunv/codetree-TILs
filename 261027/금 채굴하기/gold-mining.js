const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line) => line.split(' ').map(Number));

function getArea(k) {
    return Math.pow(k, 2) + Math.pow(k + 1, 2);
}

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function getNumOfGold(x, y, k) {
    const dx = [1, 1, -1, -1];
    const dy = [-1, 1, 1, -1];

    if (k === 0) return grid[x][y];

    let numOfGold = 0;

    let curX = x - k, curY = y;
    for (let dir = 0; dir < 4; dir++) {
        for (let step = 0; step < k; step++) {
            if (isRange(curX, curY)) {
                numOfGold += grid[curX][curY];
            }

            curX += dx[dir];
            curY += dy[dir];
        }
    }


    return numOfGold;
}

let maxNumOfGold = 0;

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        let numOfGold = 0;
        for (let k = 0; k <= (n - 1) * 2; k++) {
            numOfGold += getNumOfGold(x, y, k);

            if (numOfGold * m >= getArea(k)) {
                maxNumOfGold = Math.max(maxNumOfGold, numOfGold);
            }
        }
    }
}

console.log(maxNumOfGold);