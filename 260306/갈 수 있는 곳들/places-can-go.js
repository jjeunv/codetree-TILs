const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const startPoints = input.slice(n + 1).map(line => line.split(' ').map(Number));
const visited = Array.from({length:n}, ()=>Array(n).fill(false));
let cnt = 0;

function isRange(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

function canGo(x,y){
    return isRange(x,y) && !visited[x][y] && grid[x][y]===0
}

function dfs(x,y){
    const dx = [0,-1,0,1], dy = [1,0,-1,0];

    for(let dir=0; dir<dx.length; dir++){
        const nx=x+dx[dir], ny=y+dy[dir];
        if(canGo(nx,ny)){
            cnt++;
            visited[nx][ny] = true;
            dfs(nx,ny);
        }
    }
}

for(let [x,y] of startPoints){
    if(canGo(x-1,y-1)){
        visited[x-1][y-1] = true;
        cnt++;
        dfs(x-1, y-1);

    }
}

console.log(cnt);