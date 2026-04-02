const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(l=>l.split(' ').map(Number));

// Please Write your code here.
const dp = Array(n).fill(0);

for (let i = 0; i < n; i++) {
    dp[i] = arr[i][2];
}


for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j][1] >= arr[i][0]) {
            dp[i] = Math.max(dp[i], dp[j])
        } else if (arr[j][1] < arr[i][0]) {
            dp[i] = dp[i] + dp[j]
        }
    }
}

console.log(Math.max(...dp))