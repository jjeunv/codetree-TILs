const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
// Please Write your code here.

let ans = 0;

for(let i=0; i<n; i++){
    let isValid = true;
    for(let j=0; j<n; j++){
        if(i===j) continue;
        const [x1, x2] = segments[i];
        const [x3, x4] = segments[j];

        if((x1<=x3 && x4<=x2) || (x3<=x1 && x2<=x4)){
            isValid = false;
            break;
        }
    }
    if(isValid){
        ans++;
    }
}

console.log(ans);