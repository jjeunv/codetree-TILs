const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line) => line.split(' ').map(Number));

function getArea(k) {
    return Math.pow(k, 2) + Math.pow(k + 1, 2);
}

function getNumOfGold(x, y, k) {
    let numOfGold = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (Math.abs(x - i) + Math.abs(y - j) <= k) {
                numOfGold += grid[i][j];
            }
        }
    }

    return numOfGold;
}

let maxNumOfGold = 0;

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        for (let k = 0; k <= (n - 1) * 2; k++) {
            let numOfGold = getNumOfGold(x, y, k);

            if (numOfGold * m >= getArea(k)) {
                maxNumOfGold = Math.max(maxNumOfGold, numOfGold);
            }
        }
    }
}

console.log(maxNumOfGold);