const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let minNum = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        let cntSum = 0;

        for(let k=0; k<n; k++){
            if(k===i || k===j) continue;
            cntSum += arr[k];
        }

        minNum = Math.min(minNum, Math.abs(s-cntSum));
    }
}

console.log(minNum);