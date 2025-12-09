const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const lines = input.slice(1).map((line)=>line.split(' '));

const MAX_R = 200000;

const arr = Array(MAX_R+1).fill(0);
const cntB = Array(MAX_R+1).fill(0);
const cntW = Array(MAX_R+1).fill(0);

let cur = 100000;
for(let line of lines){
    let [x, d] = line;
    x = Number(x);
    if(d==='R'){ 
        while(x){
            arr[cur]=1;
            cntB[cur]++;
            x--;
            if(x){
                cur++;
            }
        }
    }else{
        while(x){
            arr[cur]=2;
            cntW[cur]++;
            x--;
            if(x){
                cur--;
            }
        }
    }
}

let b=0, w=0, g=0;
for(let i=0; i<MAX_R+1; i++){
    if(cntB[i]>=2 && cntW[i]>=2){
        g++;
    }else if(arr[i]===1){
        b++;
    }else if(arr[i]===2){
        w++;
    }
}

console.log(w, b, g)