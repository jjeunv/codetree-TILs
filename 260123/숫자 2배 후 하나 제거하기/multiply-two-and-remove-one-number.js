const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let ans = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){
    arr[i]*=2;

    for(let j=0; j<n; j++){
        const remain = [];
        for(let k=0; k<n; k++){
            if(j===k) continue;
            remain.push(arr[k]);
        }

        let sum = 0;
        for(let k=0; k<n-2; k++){
            sum+=Math.abs(remain[k]-remain[k+1]);
        }
        ans = Math.min(ans, sum);
    }

    arr[i]/=2;
}

console.log(ans);