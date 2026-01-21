const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let ans = 0;

for(let k=1; k<=100; k++){
    let cnt = 0;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            const a1 = arr[i], a2 = arr[j];
            if(a2-k === k-a1){
                cnt++;
            }
        }
    }
    ans = Math.max(ans, cnt);
}

console.log(ans);