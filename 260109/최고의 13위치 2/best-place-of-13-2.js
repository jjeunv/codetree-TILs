const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

let ans  = 0;

for(let i=0; i<n; i++){
    for(let j=0; j<n-2; j++){
        for(let k=0; k<n; k++){
            for(let l=0; l<n-2; l++){
                if(i===k && j+3>l){
                    continue;
                }
                let cnt = 0;
                cnt+= (grid[i][j] + grid[i][j+1] + grid[i][j+2]);
                cnt+= (grid[k][l] + grid[k][l+1] + grid[k][l+2]);
                ans = Math.max(ans,cnt);

            }
        }
    }
}

console.log(ans)