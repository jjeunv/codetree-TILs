const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.

let ans=0, cnt=0;
for(let i=0; i<n; i++){
    if(i>=1 && arr[i]===arr[i-1]){
        cnt++;
    }else{
        cnt=1;
    }
    ans = Math.max(cnt,ans);
}

console.log(ans)