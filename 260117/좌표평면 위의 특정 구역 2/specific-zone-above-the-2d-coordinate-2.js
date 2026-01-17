const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

let ans = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){
    let maxX=0, minX=40000;
    let maxY=0, minY=40000;
    for(let j=0; j<n; j++){
        if(i===j) continue;
        maxX = Math.max(maxX, points[j][0]);
        minX = Math.min(minX, points[j][0]);
        maxY = Math.max(maxY, points[j][1]);
        minY = Math.min(minY, points[j][1]);
    }
    const area = (maxX-minX)*(maxY-minY);
    ans = Math.min(ans,area);

}

console.log(ans)