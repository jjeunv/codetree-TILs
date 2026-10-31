const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, c] = input[0].trim().split(' ').map(Number);
const weights = input.slice(1).map((line) => line.trim().split(' ').map(Number));
let ans = 0;

function candidate(x1, y1, x2, y2) {
    const candidates1 = [];
    const candidates2 = [];

    for (let i = y1; i < y1 + m; i++) {
        candidates1.push(weights[x1][i]);
    }

    for (let i = y2; i < y2 + m; i++) {
        candidates2.push(weights[x2][i]);
    }

    return [candidates1, candidates2];
}

function isPossible(selected) {
    let num = selected.reduce((acc, cur) => acc + cur, 0);
    if (num > c) return false;
    return true;
}

function calc(selected) {
    let num = selected.reduce((acc, cur) => acc + cur * cur, 0);
    return num;
}

function choose(cnt, selected, candidates) {
    if (cnt === m) {
        return isPossible(selected) ? calc(selected) : 0;
    }

    selected.push(candidates[cnt]);
    const take = choose(cnt + 1, selected, candidates);
    selected.pop();

    const skip = choose(cnt + 1, selected, candidates);

    return Math.max(take, skip);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - m; j++) {
        for (let k = i; k < n; k++) {
            for (let l = 0; l <= n - m; l++) {
                if (k === i && j + m > l) continue;

                const [candidates1, candidates2] = candidate(i, j, k, l);

                let ans1 = choose(0, [], candidates1);
                let ans2 = choose(0, [], candidates2);

                ans = Math.max(ans, ans1 + ans2);
            }
        }
    }
}

console.log(ans)