const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

const OFFSET = 100;

let arr = [];
let cur =0;

for(let cmd of commands){
    let [distance, direction] = cmd;
    distance = Number(distance);
    let start, end;
    if(direction==='R'){
        start = cur;
        end = start+distance-1;
        cur = end;
    }
    else{
        end = cur;
        start = end-distance+1;
        cur = start;
    }
    arr.push([start,end, direction]);
}

let res = new Array(100000).fill(-1);
let blackCnt = new Array(100000).fill(0);
let whiteCnt = new Array(100000).fill(0);

for(let element of arr){
    let [start, end,direction] = element;
    start+=OFFSET;
    end+=OFFSET;
    for(let i=start; i<=end; i++){
        if(direction==='R'){
            res[i]=0;
            blackCnt[i]++;
        }else{
            res[i]=1;
            whiteCnt[i]++;
        }
    }
}

let grey =0;
let black=0;
let white =0;

for(let i=0; i<100000; i++){
    if(blackCnt[i]>=2 && whiteCnt[i]>=2){
        grey++;
    }else if(res[i]===0){
        black++;
    }else if(res[i]===1){
        white++;
    }
}

console.log(white, black, grey)