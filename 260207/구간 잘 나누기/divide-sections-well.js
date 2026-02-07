const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].trim().split(' ').map(Number);

const MAX_A = 10000;

let ans = MAX_A;
for(let i=1; i<=MAX_A; i++){
    let possible = true;
    let section = 1;

    let cnt = 0;
    for(let j=0; j<n; j++){
        if(a[j]>i){
            possible = false;
            break;
        }

        if(cnt+a[j]>i){
            cnt = 0;
            section+=1;
        }

        cnt += a[j];
    }

    if(possible && section<=m){
        ans = Math.min(ans,i);
    }
}

console.log(ans);