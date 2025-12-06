const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

const OFFSET = 1000;
const MAX_R = 2001;

const grid = Array.from({length:MAX_R}, ()=>Array(MAX_R).fill(0));

let [x1,y1,x2,y2] = rect1;
x1+=OFFSET; y1+=OFFSET;
x2+=OFFSET; y2+=OFFSET;
for(let i=x1; i<x2; i++){
    for(let j=y1; j<y2; j++){
        grid[i][j]=1;
    }
}

[x1,y1,x2,y2] = rect2;
x1+=OFFSET; y1+=OFFSET;
x2+=OFFSET; y2+=OFFSET;
for(let i=x1; i<x2; i++){
    for(let j=y1; j<y2; j++){
        grid[i][j]=0;
    }
}

[x1,y1,x2,y2] = rect1;
x1+=OFFSET; y1+=OFFSET;
x2+=OFFSET; y2+=OFFSET;

let maxR = 0;
let maxC = 0;
for(let i=x1; i<x2; i++){
    for(let j=y1; j<y2; j++){
        if(grid[i][j]===1){
            maxR = Math.max(maxR,i);
            maxC = Math.max(maxC,j)
        }
    }
}

if(maxR===0 && maxC===0){
    console.log(0)
}else{
   console.log((maxR-x1+1) * (maxC-y1+1)) 
}