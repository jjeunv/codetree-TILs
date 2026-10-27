const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line)=>line.split(' ').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function isRange(x, y){
    return 0<=x && x<n && 0<=y && y<m;
}

function numOfBlock1(x, y){
    let maxNum = 0;

    for(let dir=0; dir<dx.length; dir++){
        let [nx1, ny1] = [x+dx[dir], y+dy[dir]];
        let [nx2, ny2] = [nx1+dx[(dir+1)%4], ny1+dy[(dir+1)%4]];

        if(isRange(nx1, ny1) && isRange(nx2, ny2)){
            maxNum = Math.max(maxNum, grid[x][y]+grid[nx1][ny1]+grid[nx2][ny2]);
        }
    }

    return maxNum;
}

function numOfBlock2(x, y){
    let maxNum = 0;

    for(let dir=0; dir<dx.length-2; dir++){
        let [nx1, ny1] = [x+dx[dir], y+dy[dir]];
        let [nx2, ny2] = [x+dx[dir^2], y+dy[dir^2]];

        if(isRange(nx1, ny1) && isRange(nx2, ny2)){
            maxNum = Math.max(maxNum, grid[x][y]+grid[nx1][ny1]+grid[nx2][ny2]);
        }
    }

    return maxNum;
}

let maxNum = 0;

for(let x=0; x<n; x++){
    for(let y=0; y<m; y++){
        maxNum = Math.max(maxNum, numOfBlock1(x, y), numOfBlock2(x, y));
    }
}

console.log(maxNum);