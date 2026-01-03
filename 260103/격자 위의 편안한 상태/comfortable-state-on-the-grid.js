const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const moves = input.slice(1).map((move)=>move.split(' ').map(Number));

const grid = Array.from({length:n+1}, ()=>Array(n+1).fill(0));

const dx=[0,1,0,-1], dy = [1,0,-1,0];

function isGrid(x,y){
    return 1<=x && x<=n && 1<=y && y<=n;
}

for(let move of moves){
    const [x,y] = move;
    grid[x][y] = 1;
    let cnt = 0;
    for(let i=0; i<4; i++){
        const nx = x+dx[i], ny = y+dy[i];
        if(isGrid(nx,ny) && grid[nx][ny]===1){
            cnt++;
        }
    }
    console.log(cnt===3?1:0);
}
