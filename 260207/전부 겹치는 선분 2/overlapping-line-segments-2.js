const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const lines = input.slice(1).map((line)=>line.split(' ').map(Number));


let isValid = false;
for(let i=0; i<n; i++){
    let max = 0, min = Number.MAX_SAFE_INTEGER;
    for(let j=0; j<n; j++){
        if(i===j) continue;
        const [x1, x2] = lines[j];
        max = Math.max(x1, max);
        min = Math.min(x2,min);
    }

    if(max<=min){
        isValid = true;
        break;
    }
}

console.log(isValid?"Yes":"No");