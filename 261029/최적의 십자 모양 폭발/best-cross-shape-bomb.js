const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let temp2d = Array.from({ length: n }, () => Array(n).fill(0));
let temp1d = [];

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function copyGridToTemp() { // grid를 temp에 복사
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            temp2d[i][j] = grid[i][j];
        }
    }
}

function bomb(x, y, num) { // (x, y) 폭탄 터뜨리기

    temp2d[x][y] = 0;

    for (let dir = 0; dir < 4; dir++) {
        for (let i = 0; i < num; i++) {
            const nx = x + dx[dir] * i;
            const ny = y + dy[dir] * i;
            if (isRange(nx, ny)) {
                temp2d[nx][ny] = 0;
            } else {
                break;
            }
        }
    }
}

function gravity() { // 중력 작용
    for (let i = 0; i < n; i++) {
        temp1d = temp2d.map((row) => row[i]).filter(val => val !== 0);

        for (let j = n - 1; j >= 0; j--) {
            temp2d[j][i] = temp1d.length ? temp1d.pop() : 0;
        }
    }
}


function getNumOfPair() { // 조건을 만족하는 쌍의 개수 구하기
    let numOfPair = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let dir = 0; dir < 2; dir++) {
                const [nx, ny] = [i + dx[dir], j + dy[dir]];
                if (temp2d[i][j] !== 0 && isRange(nx, ny) && temp2d[i][j] === temp2d[nx][ny]) {
                    numOfPair++;
                }
            }
        }
    }

    return numOfPair;
}

function print() {
    for (const row of temp2d) {
        console.log(row.join(' '));
    }
    console.log('-----------')
}

function simulate() {
    let maxPair = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            copyGridToTemp();
            bomb(i, j, temp2d[i][j]);
            gravity();
            maxPair = Math.max(maxPair, getNumOfPair());
        }
    }

    console.log(maxPair);
}

simulate();