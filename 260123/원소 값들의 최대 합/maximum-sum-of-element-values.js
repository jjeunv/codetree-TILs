const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number)

let ans = 0;

for(let i=0; i<n; i++){ // 시작 위치
    let sum = 0;
    let idx = i;
    for(let j=0; j<m; j++){ // m번 반복
        sum+=arr[idx];
        idx = arr[idx]-1;
    }
    ans = Math.max(ans, sum);
}

console.log(ans);