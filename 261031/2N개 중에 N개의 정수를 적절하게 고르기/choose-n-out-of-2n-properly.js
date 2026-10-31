const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].trim().split(' ').map(Number);
const total = numbers.reduce((acc, cur) => acc + cur, 0);
let ans = Number.MAX_SAFE_INTEGER;

function choose(currIdx, cnt, currVal) {
    if (currIdx === 2 * n) {
        return;
    }

    if (cnt === n) {
        ans = Math.min(ans, Math.abs(total - currVal - currVal));
    }

    choose(currIdx + 1, cnt + 1, currVal + numbers[currIdx]);
    choose(currIdx + 1, cnt, currVal);
}

choose(0, 0, 0);
console.log(ans);