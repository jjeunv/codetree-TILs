const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let ans = 0;

for(let i=0; i<n; i++){
    let arr = Array(1001).fill(0);
    for(let j=0; j<n; j++){
        if(i===j) continue;
        const [t1, t2] = segments[j];
        for(let k=t1; k<t2; k++){
            arr[k]=1;
        }
        let cnt = 0;
        arr.forEach((n)=>{
            if(n===1) cnt++;
        })
        ans = Math.max(ans,cnt)
    }
}

console.log(ans);