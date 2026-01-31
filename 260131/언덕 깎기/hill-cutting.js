const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const hills = [];

for (let i = 1; i <= n; i++) {
    hills.push(Number(input[i]));
}

let ans = Number.MAX_SAFE_INTEGER;

for(let i=Math.min(...hills); i<=Math.max(...hills); i++){
    let cost = 0;
    for(let j=0; j<n; j++){
        const h = hills[j];
        if(h>i+17){
            cost+=Math.pow(h-i-17,2);
        }else if(h<i){
            cost+=Math.pow(i-h,2);
        }
    }
    // console.log(i, cost)
    ans = Math.min(ans, cost);
}

console.log(ans);