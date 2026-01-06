const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const int_max = Number.MAX_SAFE_INTEGER;
const n = Number(input[0]);
const arr = Array.from({length: n}, (_, i) => input[i + 1].split(' ').map(Number));

// Please Write your code here.
function calculateDistance(x1,y1,x2,y2){
    return Math.abs(x1-x2) + Math.abs(y1-y2);
}

let ans = int_max;

for(let i=1; i<n-1; i++){

    let curArr = [...arr];

    curArr.splice(i,1);

    let curDistance = 0;

    for(let j=0; j<curArr.length-1; j++){   
        const [x1, y1] = curArr[j];
        const [x2, y2] = curArr[j+1];

        curDistance += calculateDistance(x1, y1, x2, y2);
    }

    ans = Math.min(ans, curDistance);
}

console.log(ans)