const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

function isRange(x, y){
    return 0<=x && x<n && 0<=y && y<m;
}

const arr = Array.from({length: n}, ()=>Array(m).fill(0));

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

let code = 'A'.charCodeAt(0);
let [x, y, dir] = [0, 0, 0];

for(let i=0; i<n*m; i++){
    const nx = x+dx[dir], ny = y+dy[dir];
    const c = String.fromCharCode(code);
    arr[x][y] = c;
    code++;

    if(isRange(nx, ny) && arr[nx][ny]===0){
        x = nx, y = ny;
    }else{
        dir = (dir+1) % 4;
        x += dx[dir], y+= dy[dir];
    }
}

for(let row of arr){
    console.log(row.join(' '))
}