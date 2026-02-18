const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

let ans = Number.MAX_SAFE_INTEGER;

function findMaxJump(idx, cnt){
    if(idx>=n-1){
        ans = Math.min(ans, cnt);
    }

    for(let i=1; i<=nums[idx]; i++){
        findMaxJump(idx+i, cnt+1);
    }
}

findMaxJump(0,0);
console.log(ans===Number.MAX_SAFE_INTEGER?-1:ans)
