const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ');

let ans = Number.MAX_SAFE_INTEGER;

for(let i=1; i<=n; i++){
    let cnt = 0;
    for(let j=1; j<=n; j++){
        if(i===j) continue;
        cnt += (Math.abs(j-i) * numbers[j-1]);
    }
    ans = Math.min(ans, cnt);
}

console.log(ans);