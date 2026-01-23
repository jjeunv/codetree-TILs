const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('').map(Number);

let ans = 0;

for(let i=0; i<n; i++){
    if(seat[i]===1) continue;

    seat[i]=1;
    let distance=Number.MAX_SAFE_INTEGER;
    for(let j=0; j<n; j++){
        for(let k=j+1; k<n; k++){
            if(seat[j]===1 && seat[k]===1){
                distance = Math.min(distance, k-j);
            }
        }
    }

    ans = Math.max(ans, distance);

    seat[i]=0;
}

console.log(ans);