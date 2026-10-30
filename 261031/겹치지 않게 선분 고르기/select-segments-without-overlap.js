const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const linePos = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const selected = [];
let ans = 0;

function calc() {
    const arr = Array(1001).fill(0);

    for (const [l, r] of selected) {
        for (let i = l; i <= r; i++) {
            if (arr[i] === 1) {
                return 0;
            }
            arr[i] = 1;
        }
    }

    return selected.length;
}

function findMaxCnt(cnt) {
    if (cnt === n) {
        ans = Math.max(ans, calc());
        return;
    }

    selected.push(linePos[cnt]);
    findMaxCnt(cnt + 1);
    selected.pop();
    findMaxCnt(cnt + 1);
}

function simulation() {
    findMaxCnt(0);
    console.log(ans);
}

simulation();