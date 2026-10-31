const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const col = Array(n).fill(false);
let ans = 0;


function choose(row, sum) {
    if (row === n) {
        ans = Math.max(ans, sum);
        return;
    }

    for (let i = 0; i < n; i++) {
        if (col[i]) continue;

        col[i] = true;
        choose(row + 1, sum + numbers[row][i]);
        col[i] = false;
    }
}

choose(0, 0);
console.log(ans);