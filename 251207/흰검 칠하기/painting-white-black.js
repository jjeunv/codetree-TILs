const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const lines = input.slice(1).map((line)=>line.split(' '));

const MAX_R = 100000;

const grid = Array(2*MAX_R+1).fill(0);
const cntB = Array(2*MAX_R+1).fill(0);
const cntW = Array(2*MAX_R+1).fill(0);

let cur = MAX_R;

for(let line of lines){
    let [x,c]=line;
    x=Number(x);
    if(c==='L'){
        while(x>0){
            x--;
            cntW[cur]++;
            grid[cur]=1;
            if(x){
                cur--;
            }
        }
    }else{
       while(x>0){
            x--;
            grid[cur]=2;
            cntB[cur]++;
            if(x){
                cur++;
            }
        }
    }
}

let w=0, b=0, g=0;
for(let i=0; i<=2*MAX_R+1; i++){
    if(cntW[i]>=2 && cntB[i]>=2){
        g++;
    }else if(grid[i]===1){
        w++;
    }else if(grid[i]===2){
        b++;
    }
}

console.log(w,b,g)