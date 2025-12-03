const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rects = input.map((line)=>line.split(' ').map(Number));

const OFFSET = 1000;
const MAX_R = 2000;

const arr = Array.from({length:MAX_R+1}, ()=> Array(MAX_R+1).fill(0));


for(let i=0; i<3; i++){
    let [x1, y1, x2, y2] = rects[i];
    x1+=OFFSET; y1+=OFFSET;
    x2+=OFFSET; y2+=OFFSET;
    for(let j=x1; j<x2; j++){
        for(let k=y1; k<y2; k++){
            if(i===2){
                arr[j][k]=0;
            }else{
                arr[j][k]=1;
            }
        }
    }
}

let cnt=0;
for(let row of arr){
    cnt+=row.filter((e)=>e===1).length;
}

console.log(cnt)