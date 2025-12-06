const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1).map((line)=>line.split(' ').map(Number));

const OFFSET = 100;
const MAX_R = 200;

const grid = Array.from({length:MAX_R+1}, ()=>Array(MAX_R+1).fill(0));

rects.forEach((rect,index)=>{
    let [x1,y1,x2,y2] = rect;
    x1+=OFFSET; y1+=OFFSET;
    x2+=OFFSET; y2+=OFFSET;
    for(let x=x1; x<x2; x++){
        for(let y=y1; y<y2; y++){
            if(index%2){ // blue
                grid[x][y]=2;
            }else{ // red
                grid[x][y]=1;
            }
        }
    }
})

let cnt=0;
for(let row of grid){
    cnt+= row.filter((e)=>e===2).length;
}

console.log(cnt)