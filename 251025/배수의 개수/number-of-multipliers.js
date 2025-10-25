const fs = require('fs');
const nums = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let thr = 0;
let fiv = 0;

for(let i=0; i<nums.length; i++){
    if(nums[i]%3===0) thr++;
    if(nums[i]%5===0) fiv++;
}

console.log(thr,fiv);

