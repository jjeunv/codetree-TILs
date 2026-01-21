const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);

let ans = 0;
for(let i=0; i<=10; i++){
    const arr = Array(n+1).fill(0);
    for(let j=0; j<n; j++){
        if(h[j]>i){
            arr[j] = 1; 
        }
    }
    let cnt =0;
    for(let j=0; j<=n; j++){
        if(arr[j]===0 && arr[j-1]===1){
            cnt++;
        }
    }
    ans = Math.max(cnt, ans);
}

console.log(ans);