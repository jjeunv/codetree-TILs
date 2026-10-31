const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].trim().split(' ').map(Number);
const selected = [];

function choose(cnt) {
    if (cnt === n) {
        console.log(selected.join(' '));
        return;
    }

    for (let i = 1; i <= k; i++) {
        const len = selected.length;
        if (len < 2 || selected[len - 1] !== i || selected[len - 2] !== i) {
            selected.push(i);
            choose(cnt + 1);
            selected.pop();
        }
    }
}

choose(0);