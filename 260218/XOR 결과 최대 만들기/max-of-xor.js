const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

let ans = 0;

function calc(idx, cnt, value){
    if(cnt===m){
        ans = Math.max(ans, value);
        return;
    }

    if(idx===n) return;

    calc(idx+1, cnt+1, value^a[idx]);
    calc(idx+1, cnt, value);
}

calc(0, 0, 0);

console.log(ans);