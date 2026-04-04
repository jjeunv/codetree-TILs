const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n,m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const dp = Array(m+1).fill(-1);
dp[0] = 0
for(let i=1; i<=m; i++){
    for(let j=0; j<n; j++){
        if(dp[i-arr[j]]===-1) continue;
        if(i>=arr[j]){
        dp[i] = Math.max(dp[i], dp[i-arr[j]]+1);
        }
    }
}
console.log(dp[m])