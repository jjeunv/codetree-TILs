const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

arr.sort((a,b)=>a-b);

let ans =0;
for(let i=0; i<n; i++){
    let cnt=1;
    for(let j=i+1; j<n; j++){
        if(arr[j]-arr[i]<=k){
            cnt++;
        }else{
            break;
        }
    }
    ans = Math.max(ans,cnt);
}

console.log(ans);