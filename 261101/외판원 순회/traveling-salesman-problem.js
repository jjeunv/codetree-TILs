const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const visited = Array(n).fill(false);
let ans = Number.MAX_SAFE_INTEGER;

function choose(cnt, prevNum, sumVal) {
    if (cnt === n - 1) {
        if (numbers[prevNum][0]) {
            ans = Math.min(ans, sumVal + numbers[prevNum][0]);
        }
        return;
    }

    for (let i = 1; i < n; i++) {
        if (visited[i]) continue;
        if (numbers[prevNum][i] === 0) continue;

        visited[i] = true;
        choose(cnt + 1, i, sumVal + numbers[prevNum][i]);

        visited[i] = false;
    }
}

choose(0, 0, 0);
console.log(ans);