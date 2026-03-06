const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + Number(n)).map(line => line.split(' ').map(Number));

const visited = Array.from({length:n}, ()=> Array(m).fill(false));

function isRange(x, y){
    return 0<=x && x<n && 0<=y && y<m;
}

function initialize(){
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            visited[i][j]=false;
        }
    }
}

function dfs(x, y, h){
    const dx = [0, -1, 0, 1], dy = [1, 0, -1, 0];

    for(let dir=0; dir<dx.length; dir++){
        const nx = x+dx[dir], ny = y+dy[dir];
        if(isRange(nx, ny) && !visited[nx][ny] && grid[nx][ny]>h){
            visited[nx][ny] = true;
            dfs(nx, ny, h);
        }
    }
}

let max_safe = 0;
let min_k;

for(let k=100; k>=1; k--){
    initialize();
    let cnt = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(!visited[i][j] && grid[i][j]>k){
                visited[i][j] = true;
                cnt++;
                dfs(i, j, k);
            }
        }
    }
    max_safe = Math.max(max_safe, cnt);
    if(cnt===max_safe){
        min_k = k;
    }
}

console.log(min_k, max_safe)