const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
function isRange(x, y){
    return 0<=x && x<n && 0<=y && y<n;
}

const arr = Array.from({length:n}, ()=>Array(n).fill(0));
const dx = [0, -1, 0, 1], dy = [-1, 0, 1, 0];

let [x, y, dir] = [n-1, n-1, 0];


for(let i=n*n; i>0; i--){
    arr[x][y] = i;
    const nx = x+dx[dir], ny = y+dy[dir];

    if(isRange(nx,ny) && arr[nx][ny]===0){
        x = nx, y = ny;
    }else{
        dir = (dir+1)%4;
        x += dx[dir], y +=dy[dir];
    }
}

for(let row of arr){
    console.log(row.join(' '))
}