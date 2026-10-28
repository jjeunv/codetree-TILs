const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line) => line.split(' ').map(Number));
let temp = [];

function getIndexOfEnd(startIdx, num) {
    for (let i = startIdx + 1; i < n; i++) {
        if (temp[i] !== num) {
            return i - 1;
        }
    }
    return n - 1;
}

function gravity() {
    for (let col = 0; col < n; col++) {
        let temp = [];
        for (let row = 0; row < n; row++) {
            if (grid[row][col] !== 0) {
                temp.push(grid[row][col]);
            }
        }
        while (temp.length !== n) {
            temp.unshift(0);
        }
        for (let row = 0; row < n; row++) {
            grid[row][col] = temp[row];
        }
    }
}

function bomb() {
    while (true) {
        let flag = false;
        for (let col = 0; col < n; col++) {
            temp = grid.map((row) => row[col]);

            let startIdx = 0;
            while (startIdx !== n) {

                let endIdx = getIndexOfEnd(startIdx, temp[startIdx]);

                if (temp[startIdx] === 0) {
                    startIdx = endIdx + 1;
                    continue;
                }

                if (endIdx - startIdx + 1 >= m) {
                    flag = true;
                    temp.splice(startIdx, endIdx - startIdx + 1);

                    while (temp.length !== n) {
                        temp.unshift(0);
                    }
                }
                startIdx = endIdx + 1;
            }

            for (let row = 0; row < n; row++) {
                grid[row][col] = temp[row];
            }
        }

        if (!flag) break;
    }
}

function rotate() {
    const temp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            temp[j][n - i - 1] = grid[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = temp[i][j];
        }
    }

    gravity();
}

function getNumOfBomb() {
    let numOfBomb = 0;

    for (const row of grid) {
        for (const val of row) {
            if (val) numOfBomb++;
        }
    }

    return numOfBomb;
}

function printGrid() {

    for (const row of grid) {
        console.log(row.join(' '));
    }

    console.log("--------------");
}

function simulate() {
    for (let _ = 0; _ < k; _++) {
        bomb()
        rotate();
    }

    bomb();
    console.log(getNumOfBomb());
}

simulate();