const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
const pieces = Array(k).fill(1);

let ans = 0;

function calc(){
    let score = 0;
    for(const piece of pieces){
        score+= piece>=m ? 1 : 0;
    }
    return score;
}

function findMax(cnt){
    ans = Math.max(ans, calc());

    if(cnt===n) return;

    for(let i=0; i<k; i++){
        if(pieces[i]>=m) continue;

        pieces[i] += nums[cnt];
        findMax(cnt+1);
        pieces[i] -= nums[cnt];
    }
}

findMax(0);
console.log(ans);