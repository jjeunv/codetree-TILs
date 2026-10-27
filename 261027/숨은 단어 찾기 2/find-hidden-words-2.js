const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((line)=>line.split(''));
const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [1, 1, 0, -1, -1, -1, 0, 1];

function isRange(x, y){
    return 0<=x && x<n && 0<=y && y<m;
}

function hasLEE(x, y, dir){
    const [nx1, ny1] = [x+dx[dir], y+dy[dir]];
    const [nx2, ny2] = [nx1+dx[dir], ny1+dy[dir]];

    if(isRange(nx1, ny1) && isRange(nx2, ny2) && arr[nx1][ny1]==='E' && arr[nx2][ny2]==='E'){
        return true;
    }

    return false;
}

let cnt = 0;

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        if(arr[i][j]==='L'){
            for(let dir=0; dir<8; dir++){
                if(hasLEE(i, j, dir)){
                    cnt++;
                }
            }
        }
    }
}

console.log(cnt);