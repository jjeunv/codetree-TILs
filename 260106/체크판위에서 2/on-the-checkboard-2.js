const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [r, c] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.
let ans =0;
for(let i=1; i<r-2; i++){
    for(let j=1; j<c-2; j++){
        for(let k=i+1; k<r-1; k++){
            for(let l=j+1; l<c-1; l++){
                if(grid[i][j]!==grid[0][0]
                && grid[k][l]!==grid[r-1][c-1]
                &&grid[i][j]!==grid[k][l]){
                    ans++;
                }
            }
        }
    }
}
console.log(ans)