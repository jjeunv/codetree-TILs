const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

let ans = 0;

function calc(cnt, value){
    if(cnt===m){
        ans = Math.max(ans, value);
        return;
    }

    for(let i=0; i<n; i++){
        calc(cnt+1, value^a[i]);
        calc(cnt+1, value);
    }
}

calc(0, 0);

console.log(ans);