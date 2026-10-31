const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const numbers = input[1].trim().split(' ').map(Number);
let ans = 0;


function choose(currIdx, cnt, currVal) {
    if (currIdx === n) {
        if (cnt === m) {
            ans = Math.max(ans, currVal);
        }
        return;
    }

    choose(currIdx + 1, cnt + 1, currVal ^ numbers[currIdx]);
    choose(currIdx + 1, cnt, currVal);
}

choose(0, 0, 0);
console.log(ans);