const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const OFFSET = 100;
const MAX_R = 200;
const grid = Array.from({length: MAX_R+1}, ()=>Array(MAX_R+1).fill(0));

for(let rect of rects){
    let [x,y] = rect;
    x+=OFFSET; y+=OFFSET;
    for(let i=x; i<x+8; i++){
        for(let j=y; j<y+8; j++){
            grid[i][j]=1;
        }
    }
}

let cnt=0;
for(let row of grid){
    cnt+=row.filter((e)=>e!==0).length;
}
console.log(cnt)