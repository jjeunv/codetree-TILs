const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number)

const inc = Array(n).fill(1);
const dec = Array(n).fill(1);

for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
            inc[i] = Math.max(inc[i], inc[j] + 1)
        }
    }
}

for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {
            dec[i] = Math.max(dec[i], dec[j] + 1)
        }
    }
}

let ans = 0;
for (let i = 0; i < n; i++) {
    ans = Math.max(ans, inc[i] + dec[i] - 1)
}

console.log(ans);