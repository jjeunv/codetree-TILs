const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].trim().split(' ').map(Number);
const distances = input[1].trim().split(' ').map(Number);
const selected = [];
let ans = 0;

function calc() {
    let arr = Array(k + 1).fill(1);

    for (let i = 0; i < n; i++) {
        arr[selected[i]] += distances[i];
    }

    let num = 0;
    for (let i = 1; i <= k; i++) {
        if (arr[i] >= m) {
            num++;
        }
    }

    return num;
}

function solve(cnt) {
    if (cnt === n) {
        ans = Math.max(ans, calc());
        return;
    }

    for (let i = 1; i <= k; i++) {
        selected.push(i);
        solve(cnt + 1);
        selected.pop();
    }
}

solve(0);
console.log(ans);