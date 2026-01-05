const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.

let ans = 0;

for(let i=0; i<n; i++){
    for(let j=0; j<n-2; j++){
        let cnt = 0;
        cnt+=arr[i][j]+arr[i][j+1]+arr[i][j+2]
        ans=Math.max(ans,cnt);
    }
}

console.log(ans)