const OFFSET = 1000;
const MAX_R = 2000;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rects = input.map((line)=>line.split(' ').map(Number));

const grid = Array.from({length: MAX_R+1}, ()=>Array(MAX_R+1).fill(0));

rects.forEach((rect,index)=>{
    let [x1,y1,x2,y2] = rect;
    x1+=OFFSET; y1+=OFFSET;
    x2+=OFFSET; y2+=OFFSET;

    for(let x = x1; x<x2; x++){
        for(let y = y1; y<y2; y++){
            grid[x][y] = index+1;
        }
    }
});

let flag=false;
let min_x = MAX_R; max_x = 0; min_y = MAX_R; max_y = 0;
for(let x=0; x<MAX_R; x++){
    for(let y =0; y<MAX_R; y++){
        if(grid[x][y]===1){
            flag = true;
            min_x = Math.min(min_x,x);
            max_x=Math.max(max_x,x);
            min_y=Math.min(min_y,y);
            max_y=Math.max(max_y,y);
        }
    }
}

if(!flag){
    console.log(0);
}else{
    console.log((max_x-min_x+1)*(max_y-min_y+1))
}