const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const selected = [];
const visited = Array(n + 1).fill(0);

function choose(cnt) {
    if (cnt === n) {
        console.log(selected.join(' '));
        return;
    }

    for (let i = n; i >= 1; i--) {
        if (visited[i]) continue;

        visited[i] = true;
        selected.push(i);
        choose(cnt + 1);

        selected.pop();
        visited[i] = false;
    }
}

choose(0)