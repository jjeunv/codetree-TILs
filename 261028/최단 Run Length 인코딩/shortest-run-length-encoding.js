const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];
const n = str.length;


function getLength(str) {
    let ans = "";

    let curC = str[0];
    let curN = 1;
    for (let i = 1; i < str.length; i++) {
        if (curC === str[i]) {
            curN++;
        } else {
            ans += curC;
            ans += String(curN);
            curN = 1;
            curC = str[i];
        }
    }
    ans += curC;
    ans += String(curN);

    return ans.length;
}

function shiftRight(k) {
    let copy = [...str];

    while (k--) {
        const temp = copy[n - 1];
        for (let i = n - 1; i > 0; i--) {
            copy[i] = copy[i - 1];
        }
        copy[0] = temp;
    }

    return copy.join('');
}

let minLength = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    const s = shiftRight(i);
    minLength = Math.min(minLength, getLength(s));
}

console.log(minLength);