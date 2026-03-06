const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));
const visited = Array.from({length:n}, ()=>Array(m).fill(false)); 

function isRange(x,y){
    return 0<=x && x<n && 0<=y && y<m;
}

function canGo(x, y){
    if(!isRange(x,y)) return false;

    if(grid[x][y]===0 || visited[x][y]) return false;

    return true;
}

function dfs(x, y){
    const dx = [0, 1], dy = [1, 0];

    for(let dir=0; dir<dx.length; dir++){
        const nx = x+dx[dir], ny = y+dy[dir];
        if(canGo(nx, ny)){
            visited[nx][ny] = true;
            dfs(nx, ny);
        }
    }
}

visited[0][0] = true;
dfs(0, 0);

console.log(visited[n-1][m-1] ? 1 : 0);