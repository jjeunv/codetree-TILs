const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, c] = input[0].trim().split(' ').map(Number);
const weights = input.slice(1).map((line) => line.trim().split(' ').map(Number));
let selected = [];
let maxVal = 0;
let ans = 0;

function findMaxSum(curIdx, curWeight, curVal) {
    if (curIdx === m) {
        if (curWeight <= c) {
            maxVal = Math.max(maxVal, curVal);
        }
        return;
    }

    findMaxSum(curIdx + 1, curWeight + selected[curIdx], curVal + selected[curIdx] * selected[curIdx]);
    findMaxSum(curIdx + 1, curWeight, curVal);
}

function findMax(x, y) {
    selected = weights[x].slice(y, y + m);
    maxVal = 0;

    findMaxSum(0, 0, 0);
    return maxVal;
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - m; j++) {
        for (let k = i; k < n; k++) {
            for (let l = 0; l <= n - m; l++) {
                if (k === i && j + m > l) continue;
                const sum = findMax(i, j) + findMax(k, l);
                ans = Math.max(ans, sum);
            }
        }
    }
}

console.log(ans)