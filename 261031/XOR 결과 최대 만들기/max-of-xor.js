const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const numbers = input[1].trim().split(' ').map(Number);
const selected = [];
let ans = 0;

function calc() {
    let num = numbers[selected[0]];
    for (let i = 1; i < selected.length; i++) {
        num = num ^ numbers[selected[i]];
    }
    return num;
}


function choose(currIdx, cnt) {
    if (currIdx === n) {
        if (cnt === m) {
            ans = Math.max(ans, calc());
        }
        return;
    }

    selected.push(currIdx);
    choose(currIdx + 1, cnt + 1);
    selected.pop();

    choose(currIdx + 1, cnt);
}

choose(0, 0);
console.log(ans);