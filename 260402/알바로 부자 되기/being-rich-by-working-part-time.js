const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(l => l.split(' ').map(Number));

arr.sort((a,b)=>a[1]-b[1])
// Please Write your code here.
const dp = Array(n).fill(0);

for (let i = 0; i < n; i++) {
    dp[i] = arr[i][2];
}

// console.log(dp)
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j][1] >= arr[i][0]) {
            dp[i] = Math.max(dp[i], dp[j])
        } else if (arr[j][1] < arr[i][0]) {
            dp[i] = Math.max(dp[i], arr[i][2] + dp[j])
        }
        // console.log(dp)
    }
}

console.log(Math.max(...dp))