const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let arr = input.slice(1).map(Number);

function getEndIdx(idx, num) {
    for (let i = idx + 1; i < arr.length; i++) {
        if (arr[i] !== num) {
            return i - 1;
        }
    }
    return arr.length - 1;
}

while (true) {
    let flag = true;

    let curIdx = 0;
    while (curIdx < arr.length) {
        let endIdx = getEndIdx(curIdx, arr[curIdx]);

        if (endIdx - curIdx + 1 >= m) {
            flag = false;
            arr.splice(curIdx, endIdx - curIdx + 1);
        } else {
            curIdx = endIdx + 1;
        }
    }

    if (flag) {
        break;
    }
}

console.log(arr.length);
for (const val of arr) {
    console.log(val);
}