const fs = require("fs");
const input = fs.readFileSync(0).toString().trim(' ').split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.trim().split(''));
const coinPos = [];
const selectedPos = [];
let startPos = [-1, -1];
let endPos = [-1, -1];
let ans = INT_MAX;
const m = 3;


function initialize() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 'S') {
                startPos = [i, j];
            } else if (grid[i][j] === 'E') {
                endPos = [i, j];
            }
        }
    }

    for (let num = 1; num <= 9; num++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === String(num)) {
                    coinPos.push([i, j]);
                }
            }
        }
    }
}

function dist(a, b) {
    const [ax, ay] = a;
    const [bx, by] = b;

    return Math.abs(ax - bx) + Math.abs(ay - by);
}

function calc() {
    let num = dist(startPos, selectedPos[0]);

    for (let i = 0; i < m - 1; i++) {
        num += dist(selectedPos[i], selectedPos[i + 1]);
    }

    num += dist(selectedPos[m - 1], endPos);

    return num;
}

function choose(currIdx, cnt) {

    if (currIdx === coinPos.length) {
        if (cnt === m) {
            ans = Math.min(ans, calc());
        }
        return;
    }

    selectedPos.push(coinPos[currIdx]);
    choose(currIdx + 1, cnt + 1);
    selectedPos.pop();

    choose(currIdx + 1, cnt);
}

function simulation() {
    initialize();

    choose(0, 0);

    if (ans === INT_MAX) {
        ans = -1;
    }

    console.log(ans);
}

simulation()
