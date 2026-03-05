const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const cells = [];

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        cells.push([grid[i][j], i, j]);
    }
}

cells.sort((a,b)=>a[0]-b[0]);

function isRange(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

const dp = Array.from({length: n}, ()=>Array(n).fill(1));

const dx = [0,1,0,-1], dy = [1,0,-1,0];
cells.forEach(([value, x, y])=>{
    for( let i=0; i<4; i++){
        const nx = x+dx[i], ny = y+dy[i];
        if(isRange(nx, ny) && grid[nx][ny]> value){
            dp[nx][ny] = Math.max(dp[nx][ny], dp[x][y]+1);
        }
    }
})

let ans = 0;

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        ans = Math.max(ans, dp[i][j]);
    }
}

console.log(ans);