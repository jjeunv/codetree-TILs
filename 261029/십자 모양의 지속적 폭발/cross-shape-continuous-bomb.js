const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.split(' ').map(Number));
const cols = input.slice(1 + n).map(Number);

function isRange(r, c) {
    return 0 <= r && r < n && 0 <= c && c < n;
}

function getIndex(col) {
    let [r, c] = [-1, -1];

    for (let i = 0; i < n; i++) {
        if (grid[i][col] !== 0) {
            [r, c] = [i, col];
            break;
        }
    }

    return [r, c];
}

function bomb(r, c, num) {
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

    grid[r][c] = 0;

    for (let dir = 0; dir < 4; dir++) {
        for (let i = 1; i <= num - 1; i++) {
            const [nx, ny] = [r + dx[dir] * i, c + dy[dir] * i];
            if (isRange(nx, ny)) {
                grid[nx][ny] = 0;
            }
        }
    }
}

function shiftNum() {
    for (let i = 0; i < n; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            if (grid[j][i] !== 0) {
                temp.push(grid[j][i]);
            }
        }
        while (temp.length !== n) {
            temp.unshift(0);
        }

        for (let j = 0; j < n; j++) {
            grid[j][i] = temp[j];
        }
    }
};

function printGrid() {
    for (const row of grid) {
        console.log(row.join(' '));
    }
}

function simulate() {
    for (let i = 0; i < m; i++) {
        const col = cols[i] - 1; // 폭탄 터질 열
        let [r, c] = getIndex(col); // 폭탄 터질 위치
        if (r !== -1) {
            bomb(r, c, grid[r][c]); // 폭탄 터뜨리기
            shiftNum();
        }
    }

    printGrid();

}



simulate();
