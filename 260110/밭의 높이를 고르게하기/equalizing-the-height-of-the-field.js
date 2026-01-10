const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n,h,t]= input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let ans = Number.MAX_SAFE_INTEGER;
for(let i=0; i<n-t+1; i++){
    let cost = 0;
    for(let j=i; j<i+t; j++){
        cost += Math.abs(h-arr[j]);
    }
    ans = Math.min(cost,ans);
}

console.log(ans)