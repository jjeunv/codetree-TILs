const fs = require("fs");
const [n,m] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const arr = Array.from({length: n},()=>Array(m).fill(0));


const dx = [0,1,0,-1], dy = [1,0,-1,0];

function isValid(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

let x=0, y=0;
let dir=0;
let cur = 1;

arr[x][y]=cur;
for(let i=1; i<n; i++){
    for(let j=1; j<m; j++){
        let nx = x+dx[dir], ny = y+dy[dir];
        if(isValid(nx, ny) && arr[nx][ny]===0){
            arr[nx][ny]=cur;
            cur++;
            x=nx, y=ny;
        }else{
            dir= (dir+1)%4;
        }
    }
}

for(let row of arr){
    console.log(row.join(' '))
}