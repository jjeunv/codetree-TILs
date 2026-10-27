const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));
const inform = input.slice(1 + n).map((line) => {
    const [r, d] = line.split(' ');
    return [Number(r) - 1, d === 'L' ? 1 : 0]; // 왼쪽 shift 0, 오른쪽 shift 1
});

function isRange(x) {
    return 0 <= x && x < n;
}

function shiftLeft(r) {
    const temp = grid[r][0];

    for (let i = 0; i < m - 1; i++) {
        grid[r][i] = grid[r][i + 1];
    }

    grid[r][m - 1] = temp;
}

function shiftRight(r) {
    const temp = grid[r][m - 1];

    for (let i = m - 1; i > 0; i--) {
        grid[r][i] = grid[r][i - 1];
    }

    grid[r][0] = temp;
}

function shiftNum(r, d) {
    if (d) {
        shiftRight(r);
    } else {
        shiftLeft(r);
    }
}

function checkCol(r1, r2) {
    for (let col = 0; col < m; col++) {
        if (grid[r1][col] === grid[r2][col]) {
            return true;
        }
    }

    return false;
}

function printNum() {
    for (const row of grid) {
        console.log(row.join(' '));
    }
}

for (let i = 0; i < q; i++) {
    let [r, d] = inform[i];

    shiftNum(r, d);

    let currR = r;
    let currD = d;

    while (currR != 0) {
        if (isRange(currR - 1) && checkCol(currR, currR - 1)) {
            currR--;
            currD = 1 - currD;
        } else {
            break;
        }

        shiftNum(currR, currD);
    }

    [currR, currD] = [r, d];

    while (currR != n - 1) {
        if (isRange(currR + 1) && checkCol(currR, currR + 1)) {
            currR++;
            currD = 1 - currD;
        } else {
            break;
        }

        shiftNum(currR, currD);
    }

}

printNum();