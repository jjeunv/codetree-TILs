const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const startPoints = input.slice(1 + n, 1 + n + k).map(line => line.split(' ').map(Number));
const visited = Array.from({length: n}, ()=> Array.from({length: n}, ()=>
    Array(m+1).fill(false))) // [행][열][치운 돌의 수]
const dx = [0,1,0,-1], dy = [1,0,-1,0];
const selectedPoints = [];
const rockPoints=[];


function isRange(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

function isValid(x,y){
    return isRange(x,y) && grid[x][y]===0 && !visited[x][y];
}

function initialize(){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            visited[i][j] = false;
        }
    }
}

function calc(){
    let cnt = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(visited[i][j]) cnt++;
        }
    }
    return cnt;
}

function bfs(){
    initialize();

    selectedPoints.forEach(([r,c])=>{
        grid[r][c] = 0;
    })

    const queue = [];
    let head = 0;

    startPoints.forEach(([x,y])=>{
        visited[x-1][y-1] = true;
        queue.push([x-1,y-1]);
    })

    while(head<queue.length){
        const [x,y] = queue[head];
        head++;

        for(let dir=0; dir<dx.length; dir++){
            const nx = x+dx[dir], ny = y+dy[dir];
            if(isValid(nx,ny)){
                visited[nx][ny] = true;
                queue.push([nx,ny]);
            }
        }
    }

    selectedPoints.forEach(([r,c])=>{
        grid[r][c] = 1;
    })
}

let ans = 0;

function findMaxCnt(idx, cnt){
    if(cnt===m){
        bfs();
        ans = Math.max(ans, calc());
        return;
    }

    if(idx >= rockPoints.length) return;

    selectedPoints.push(rockPoints[idx]);
    findMaxCnt(idx+1, cnt+1);
    selectedPoints.pop();

    findMaxCnt(idx+1, cnt);
}

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(grid[i][j]===1){
            rockPoints.push([i,j]);
        }
    }
}
findMaxCnt(0,0)
console.log(ans)