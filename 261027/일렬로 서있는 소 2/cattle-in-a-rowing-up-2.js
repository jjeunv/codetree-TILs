const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const heights = input[1].split(' ').map(Number);

let ans = 0;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        for(let k=j+1; k<n; k++){
            if(heights[i]<=heights[j]&&heights[j]<=heights[k]) ans++;
        }
    }
}

console.log(ans);