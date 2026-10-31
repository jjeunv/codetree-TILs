const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const selected = []

function choose(currNum, cnt) {
    if (currNum === n + 1) {
        if (cnt === m) {
            console.log(selected.join(' '));
        }
        return;
    }

    selected.push(currNum);
    choose(currNum + 1, cnt + 1);
    selected.pop();
    choose(currNum + 1, cnt)
}

choose(1, 0)