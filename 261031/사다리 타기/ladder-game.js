const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const lines = input.slice(1).map((line) => {
    const [a, b] = line.trim().split(' ').map(Number);
    return [b, a - 1];
});

const selected = [];
let ans = m;

function isSame() {
    let num1 = Array.from({ length: n }, (_, i) => i);
    let num2 = Array.from({ length: n }, (_, i) => i);

    lines.forEach(([_, idx]) => {
        [num1[idx], num1[idx + 1]] = [num1[idx + 1], num1[idx]];
    })
    selected.forEach(([_, idx]) => {
        [num2[idx], num2[idx + 1]] = [num2[idx + 1], num2[idx]];
    })

    for (let i = 0; i < n; i++) {
        if (num1[i] !== num2[i]) {
            return false;
        }
    }

    return true;
}

function findMinCnt(cnt) {
    if (cnt === m) {
        if (isSame()) {
            ans = Math.min(ans, selected.length);
        }
        return;
    }

    selected.push(lines[cnt]);
    findMinCnt(cnt + 1);
    selected.pop();

    findMinCnt(cnt + 1);
}

function simulation() {
    lines.sort((a, b) => a[0] - b[0]);
    findMinCnt(0);
    console.log(ans);
}

simulation();