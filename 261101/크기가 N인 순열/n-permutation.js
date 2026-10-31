const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const selected = [];
const visited = Array(n + 1).fill(0);

function choose(currNum) {
    if (currNum === n) {
        console.log(selected.join(' '));
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (visited[i]) continue;

        selected.push(i);
        visited[i] = true;
        choose(currNum + 1);

        selected.pop();
        visited[i] = false;
    }
}

choose(0);