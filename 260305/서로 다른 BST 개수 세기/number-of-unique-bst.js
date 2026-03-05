const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = Array(n+1).fill(0);

arr[0] = 1;
arr[1] = 1;

for(let i=2; i<=n; i++){
    for(let j=1; j<=i; j++){
        let cnt1 = 0; 
        for(let k=1; k<j; k++){
            if(k<j){
                cnt1++;
            }
        }
        let cnt2 = i-cnt1-1;
        arr[i] += arr[cnt1] * arr[cnt2];
        
    }
}

console.log(arr[n]);