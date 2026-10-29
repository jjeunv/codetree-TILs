const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));

function getRow() {
    let step = k - 1;
    let row = 0;
    for (let r = 1; r < n; r++) {
        let flag = false;
        for (let col = step; col <= step + m - 1; col++) {
            if (grid[r][col] === 1) {
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        } else {
            row = r;
        }
    }
    return row;
}

function simulate() {
    const row = getRow();
    let step = k - 1;

    for (let col = step; col <= step + m - 1; col++) {
        grid[row][col] = 1;
    }

    for (const row of grid) {
        console.log(row.join(' '));
    }
}

simulate();