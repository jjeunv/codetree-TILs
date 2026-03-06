const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const visited = Array.from({length:n}, ()=>Array(n).fill(false));

let cnt = 0;
const people = [];

function isRange(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

function canGo(x,y){
    if(!isRange(x,y)) return false;

    if(visited[x][y] || grid[x][y]===0) return false;

    return true;
}

function dfs(x, y){
    const dx=[0, -1, 0, 1], dy = [1,0,-1,0];

    for(let dir=0; dir<dx.length; dir++){
        const nx=x+dx[dir], ny=y+dy[dir];
        if(canGo(nx, ny)){
            visited[nx][ny] = true;
            cnt++;
            dfs(nx,ny);
        }
    }
}



for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(canGo(i, j)){
            visited[i][j] = true;
            cnt=1;
            dfs(i, j);
            people.push(cnt);
        }
    }
}

console.log(people.length);

people.sort((a,b)=>a-b);
for(let p of people){
    console.log(p);
}



