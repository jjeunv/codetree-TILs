const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rects = input.map((line)=>line.split(' ').map(Number));

// Please Write your code here.
const OFFSET = 1000;
const MAX_R = 2001;

const grid = Array.from({length:MAX_R}, ()=>Array(MAX_R).fill(0));

for(let i=0; i<=1; i++){
    let [x1,y1,x2,y2] = rects[i];
    x1+=OFFSET; y1+=OFFSET;
    x2+=OFFSET; y2+=OFFSET;
    for(let j=x1; j<x2; j++){
        for(let k=y1; k<y2; k++){
            if(i===0){
                grid[j][k]=1;
            }else{
                grid[j][k]=0;
            }
        }
    }
}

let x = 0;
let y = 0;
let [x1,y1,x2,y2] = rects[0];
x1+=OFFSET; y1+=OFFSET;
x2+=OFFSET; y2+=OFFSET;
for(let i=x1; i<x2; i++){
    for(let j=y1; j<y2; j++){
        if(grid[i][j]===1){
            x = Math.max(x,i);
            y = Math.max(y,j);
        }
    }
}

if(x===0 && y===0){
    console.log(0)
}else{
    console.log((x-x1+1)*(y-y1+1))
}
