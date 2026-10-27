const fs = require("fs");
const input = fs.readFileSync(0).toString().trim(' ').split('\n');

function isRange(x, y, dir, n){
    for(let i=0; i<4; i++){
        x += dx[dir];
        y += dy[dir];
        if(0>x || x>=n || 0>y || y>=n){
            return false;
        }
    }
    return true;
}

function isWinner(x, y, num, dir, arr){
    for(let i=0; i<4; i++){
        x+=dx[dir];
        y+=dy[dir];
        if(arr[x][y]!==num){
            return false;
        }
    }
    return true;
}



const arr = input.slice().map((line)=> line.trim().split(' ').map(Number));
const n = arr.length;

const dx = [1, 1, 1, 0];
const dy = [-1, 0, 1, 1];

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        for(let dir=0; dir<4; dir++){
            if(arr[i][j]!==0 && isRange(i, j, dir, n) && isWinner(i, j, arr[i][j], dir, arr)){
                console.log(arr[i][j]);
                console.log(i+dx[dir]*2+1, j+dy[dir]*2+1);
                process.exit();
            }
        }
    }
}

console.log(0);
