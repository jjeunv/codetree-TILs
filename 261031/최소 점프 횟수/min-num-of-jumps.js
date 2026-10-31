const fs = require("fs");
const input = fs.readFileSync(0).toString().trim('').split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;
const n = Number(input[0]);
const numbers = input[1].trim().split(' ').map(Number);
let ans = INT_MAX;

function jump(currIdx, cnt) {
    if (currIdx >= n - 1) {
        ans = Math.min(ans, cnt);
        return;
    }

    const num = numbers[currIdx];
    for (let i = 1; i <= num; i++) {
        jump(currIdx + i, cnt + 1);
    }
}

jump(0, 0);
console.log(ans === INT_MAX ? -1 : ans);