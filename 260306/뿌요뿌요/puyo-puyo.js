const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(row => row.split(" ").map(Number));
const visited = Array.from({length:n}, ()=>Array(n).fill(false));

let cnt = 0;
let max_block = 0;
let bomb = 0;

function isRange(x, y){
    return 0<=x && x<n && 0<=y && y<n;
}

function canGo(x, y, num){
    if(!isRange(x,y)) return false;

    if(visited[x][y] || grid[x][y]!==num) return false;

    return true;
}

function dfs(x, y, num){
    const dx = [0, -1, 0, 1], dy = [1, 0, -1, 0];

    for(let dir=0; dir<dx.length; dir++){
        const nx = x+dx[dir], ny = y+dy[dir];
        if(canGo(nx, ny, num)){
            visited[nx][ny] = true;
            cnt++;
            dfs(nx, ny, num);
        }
    }
}

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        cnt = 0;
        if(canGo(i,j,grid[i][j])){
            visited[i][j] = true;
            cnt++;
            dfs(i,j,grid[i][j]);
        }
        if(cnt>=4){
            bomb++;
        }
        max_block = Math.max(max_block, cnt);
    }
}

console.log(bomb, max_block);