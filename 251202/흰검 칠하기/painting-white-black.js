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
        if(res[i]===2) continue;
        if(direction==='R'){
            res[i]=0;
            blackCnt[i]++;
        }else{
            res[i]=1;
            whiteCnt[i]++;
        }
        if(blackCnt[i]>=2 && whiteCnt[i]>=2){
            res[i]=2;
        }
    }
}

let grey =res.filter((e)=>e===2).length;
let black=res.filter((e)=>e===0).length;
let white =res.filter((e)=>e===1).length;


console.log(white, black, grey)