const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

arr.sort((a,b)=>a-b);

let ans = Number.MAX_SAFE_INTEGER;
for(let i=arr[0]; i<=arr[n-1]; i++){
    const min = i, max = i+k;
    let cost = 0;
    for(let j=0; j<n; j++){
        const cur = arr[j];
        if(cur<min){
            cost+=Math.abs(min-cur);
        }else if(cur>max){
            cost+=Math.abs(max-cur);
        }
    }
    ans = Math.min(ans, cost);

}

console.log(ans);