const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coin = input[1].split(' ').map(Number);

let isTrue = false;
// Please write your code here.
function istheSumM(idx, sum) {
    if (sum === m) {
        isTrue = true;
        return;
    };
    if (idx >= n) return;

    istheSumM(idx + 1, sum + coin[idx]);
    istheSumM(idx + 1, sum);
}

istheSumM(0,0);
console.log(isTrue ? "Yes" : "No")