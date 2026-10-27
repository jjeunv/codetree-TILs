const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.split(' ').map(Number));
const dx = [-1, -1, 1, 1], dy = [1, -1, -1, 1];

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function getSum(x, y, step1, step2) {
    let curSum = 0;

    for(let dir=0; dir<4; dir++){
        let curStep = dir%2===0 ? step1 : step2;

        for(let i=0; i<curStep; i++){
            curSum += grid[x][y];

            const nx=x+dx[dir], ny=y+dy[dir];

            if(isRange(nx, ny)){
                x=nx, y=ny;
                
            }else{
                return 0;
            }
        }
    }

    return curSum;
}

let maxNum = 0;

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        for (let step1 = 1; step1 < n - 1; step1++) {
            for (let step2 = 1; step2 < n - 1; step2++) {
                maxNum = Math.max(maxNum, getSum(x, y, step1, step2));
            }
        }
    }
}

console.log(maxNum);