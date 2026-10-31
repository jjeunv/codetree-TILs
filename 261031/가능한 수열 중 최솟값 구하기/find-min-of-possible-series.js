const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const selected = [];

function isPossible() {
    for (let x1 = 0; x1 < n; x1++) {

        for (let i = 1; i <= Math.floor(n / 2); i++) {
            if (x1 + i >= selected.length) break;

            const arr1 = selected.slice(x1, x1 + i);
            const arr2 = selected.slice(x1 + i, x1 + i + i);

            let flag = true;
            for (let j = 0; j < i; j++) {
                if (arr1[j] !== arr2[j]) {
                    flag = false;
                    break;
                }
            }

            if (flag) return false;
        }
    }
    return true;
}

function choose(cnt) {
    // console.log(selected)
    if (cnt === n) {
        if (isPossible()) {
            console.log(selected.join(''));
            process.exit(0);
        }
        return;
    }

    for (let i = 4; i <= 6; i++) {
        selected.push(i);
        if (isPossible()) {
            choose(cnt + 1);
        }
        selected.pop()
    }
}

choose(0)