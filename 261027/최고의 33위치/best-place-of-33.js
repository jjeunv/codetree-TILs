const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((line)=>line.split(' ').map(Number));

function getCoinCount(x, y){
    let cntNum = 0;

    for(let i=x; i<x+3; i++){
        for(let j=y; j<y+3; j++){
            cntNum += arr[i][j];
        }
    }

    return cntNum;
}

let maxNum = 0;

for(let x=0; x<n-2; x++){
    for(let y=0; y<n-2; y++){
        maxNum = Math.max(maxNum, getCoinCount(x, y));
    }
}

console.log(maxNum);