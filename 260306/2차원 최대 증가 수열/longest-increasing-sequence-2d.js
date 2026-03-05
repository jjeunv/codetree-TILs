const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

// Please Write your code here.
const dp = Array.from({length:n}, ()=>Array(m).fill(Number.MIN_SAFE_INTEGER));

dp[0][0] = 1;

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){

        for(let k=0; k<i; k++){
            for(let l=0; l<j; l++){
                if(dp[k][l]===Number.MIN_SAFE_INTEGER) continue;

                if(grid[i][j] > grid[k][l]){
                    dp[i][j] = Math.max(dp[i][j], dp[k][l]+1);
                }
            }
        }
    }
}

let ans = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        ans = Math.max(ans, dp[i][j]);
    }
}

console.log(ans);