const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function isValid(num){
    const cnt = [];
    for(let i=0; i<n; i++){
        if(arr[i]<=num){
            cnt.push(i);
        }
    }

    let cur = 0;
    for(let i=0; i<cnt.length; i++){
        if(cnt[i]-cur<=k){
            cur = cnt[i];
        }else{
            return false;
        }
    }
    return true;
}

let ans;

for(let i=n; i>=Math.max(arr[0], arr[arr.length-1]); i--){
    if(isValid(i)){
        ans = i;
    }
}

console.log(ans)