const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);

const dp = Array(n).fill(1);

for(let i=0; i<n; i++){
    for(let j=0; j<i; j++){
        if(a[j]<a[i]){
            dp[i] = Math.max(dp[i], dp[j]+1);
        }
    }
}

let ans = 0;
for(let i=0; i<n; i++){
    ans = Math.max(ans, dp[i]);
}

console.log(ans);