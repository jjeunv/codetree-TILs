const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((line)=>Number(line.trim()));

let minDistance = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){
    let curDistance = 0;

    for(let j=0; j<n; j++){
        if(i <= j){
            curDistance += (j-i) * arr[j];
        }else{
            curDistance += (n-i+j) * arr[j];
        }
    }

    minDistance = Math.min(minDistance, curDistance);
}

console.log(minDistance);