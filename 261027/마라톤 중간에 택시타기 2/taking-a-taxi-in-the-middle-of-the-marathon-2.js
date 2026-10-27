const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const checkPoints = input.slice(1).map((line)=>line.trim().split(' ').map(Number));

let minDistance = Number.MAX_SAFE_INTEGER;

for(let i=1; i<n-1; i++){
    const newCheckPoints = [];

    for(let j=0; j<n; j++){
        if(i!==j) newCheckPoints.push(checkPoints[j]);
    }

    let curDistance = 0;

    for(let j=1; j<n-1; j++){
        const [x1, y1] = newCheckPoints[j-1];
        const [x2, y2] = newCheckPoints[j];
        curDistance += (Math.abs(x1-x2) + Math.abs(y1-y2));
    }

    minDistance = Math.min(minDistance, curDistance);
}

console.log(minDistance);