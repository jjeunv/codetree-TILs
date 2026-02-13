const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seats = input[1].split("").map(Number);

let ans = 0;
for(let i=1; i<n; i++){
    if(seats[i]===1) continue;
    seats[i] = 1;        
    let distance = Number.MAX_SAFE_INTEGER;
    for(let j=0; j<n; j++){
        for(let k=j+1; k<n; k++){
            if(seats[j]===1 && seats[k]===1){
                distance = Math.min(distance, k-j);
                break;
            }
        }
    }
    ans = Math.max(ans, distance)
    seats[i] = 0;
}

console.log(ans)