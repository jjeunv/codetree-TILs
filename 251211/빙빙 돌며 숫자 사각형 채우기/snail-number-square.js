const fs = require("fs");
const [n,m] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const arr = Array.from({length: n+1},()=>Array(m+1).fill(0));


const dx = [0,1,0,-1], dy = [1,0,-1,0];

function isValid(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

let x=0, y=0;
let dir=0;
arr[x][y] =1;

for(let i=2; i<=n*m; i++){
    let nx = x+dx[dir], ny = y+dy[dir];
    if(!isValid(nx,ny) || arr[nx][ny]!==0){
        dir = (dir+1)%4;
    }
    x += dx[dir], y += dy[dir];
    arr[x][y] = i;
}

for(let row of arr){
    console.log(row.join(' '))
}