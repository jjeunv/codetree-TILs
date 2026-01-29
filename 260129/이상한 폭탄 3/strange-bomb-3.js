const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

let maxCnt = 0;
let ans =0;

for(let i=0; i<n; i++){
    let cnt = 0;
    let num = nums[i];
    for(let j=0; j<n; j++){
        if(i===j) continue;
        if(nums[j]===num && Math.abs(i-j)<=k){
            cnt++;
        }
    }
    if(maxCnt<=cnt){
        maxCnt = cnt;
        ans = num;
    }
}

console.log(ans);