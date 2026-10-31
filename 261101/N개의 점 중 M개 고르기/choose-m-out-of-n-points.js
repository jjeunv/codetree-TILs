const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const positions = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const selectedPos = [];
let ans = Number.MAX_SAFE_INTEGER;

function dist(a, b) {
    const [ax, ay] = a;
    const [bx, by] = b;
    return Math.pow(ax - bx, 2) + Math.pow(ay - by, 2);
}

function calc() {
    let num = 0;
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m; j++) {
            num = Math.max(dist(selectedPos[i], selectedPos[j]), num)
        }
    }
    return num;
}

function choose(currIdx, cnt) {
    if (cnt === m) {
        ans = Math.min(ans, calc());
        return;
    }

    if (currIdx === n) return;


    selectedPos.push(positions[currIdx]);
    choose(currIdx + 1, cnt + 1);
    selectedPos.pop();

    choose(currIdx + 1, cnt);
}

choose(0, 0);
console.log(ans);