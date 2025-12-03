const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const OFFSET = 100;
const MAX_NUM = 200;

let arr = Array.from({length: MAX_NUM+1}, ()=> Array(MAX_NUM+1).fill(0));

for(let rect of rects){
    const [x1, y1, x2, y2] = rect;
    for(let i=x1; i<x2; i++){
        for(let j=y1; j<y2; j++){
            arr[i][j] =1;
        }
    }
}

let cnt =0;
for(let row of arr){
    cnt+=row.filter((e)=>e===1).length;
}

console.log(cnt)
