const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let sum = 0;
arr.forEach((n)=>sum+=n);

let ans = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        let cnt = sum-(arr[i]+arr[j]);
        ans = Math.min(ans, cnt>s?cnt-s:s-cnt);
    }
}

console.log(ans)