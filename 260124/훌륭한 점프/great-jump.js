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
    if(cnt.length<2) return false;

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
for(let i=1; i<=n; i++){
    if(isValid(i)){
        console.log(i);
        break;
    }
}