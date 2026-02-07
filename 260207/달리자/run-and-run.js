const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let ans = 0;

for(let i=0; i<n-1; i++){
    let cnt = a[i]-b[i];
    ans+=cnt;
    a[i+1]+=cnt;
}

console.log(ans)