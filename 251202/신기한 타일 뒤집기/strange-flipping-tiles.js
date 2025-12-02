const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

const OFFSET = 100000;

const vertical = new Array(OFFSET*2+1).fill(0);
let cur = OFFSET;

for(let command of commands){
    let [distance, direction] = command.split(' ');
    distance = Number(distance);

    if(direction==='R'){
        while(distance>0){
            vertical[cur]=1;
            distance--;
            cur++;
        }
    }else{
        while(distance>0){
            cur--;
            vertical[cur]=2;
            distance--;
        }
    }
}

let b = vertical.filter((e)=>e===1).length;
let w = vertical.filter((e)=>e===2).length;

console.log(w,b)