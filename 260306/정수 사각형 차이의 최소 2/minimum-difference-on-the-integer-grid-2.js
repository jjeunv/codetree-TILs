const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const dp = Array.from({length:n}, ()=>Array(n).fill(0));

dp[0][0] = [1,1,0];

for(let i=1; i<n; i++){
    let [min, max, sub] = dp[i-1][0];
    const num = grid[i][0];
    min = Math.min(min, num);
    max = Math.max(max, num);
    sub = max-min;
    dp[i][0] = [min, max, sub];
}

for(let j=1; j<n; j++){
    let [min, max, sub] = dp[0][j-1];
    const num = grid[0][j];
    min = Math.min(min, num);
    max = Math.max(max, num);
    sub = max-min;
    dp[0][j] = [min, max, sub];
}

for(let i=1; i<n; i++){
    for(let j=1; j<n; j++){
        let [min1, max1, sub1] = dp[i-1][j];
        let [min2, max2, sub2] = dp[i][j-1];
        const num = grid[i][j];
        min1 = Math.min(min1, num);
        max1 = Math.max(max1, num);
        sub1 = max1-min1;

        min2 = Math.min(min2, num);
        max2 = Math.max(max2, num);
        sub2 = max2-min2;

        if(sub1<sub2){
            dp[i][j] = [min1, max1, sub1];
        }else{
            dp[i][j] = [min2, max2, sub2];
        }
    }
}

console.log(dp[n-1][n-1][2])