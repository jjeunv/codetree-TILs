const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const dp = Array(n + 1).fill(0);
dp[0] = 1;
const num = [1, 2, 5]

for (let i = 0; i <= n; i++) {
    for(let j=0; j<num.length; j++){
        if(i+num[j]<=n){
            dp[i+num[j]] += dp[i]
        }
    }
}

console.log(dp[n])