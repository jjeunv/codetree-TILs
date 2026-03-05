const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = Array(n+1).fill(-1);

arr[0] = 1;
arr[1] = 2;

const MOD = 1000000007;

for(let i=2; i<=n; i++){
    arr[i] = (arr[i-1]*2 + arr[i-2]*3) % MOD;
    for(let j=i-3; j>=0; j--){
        arr[i] = (arr[i] + arr[j] * 2) % MOD;

    }
}

console.log(arr[n]);