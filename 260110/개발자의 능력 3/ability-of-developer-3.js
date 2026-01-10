const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.
let sum = 0;
arr.forEach((number)=>{
    sum+=number;
})

let ans = Number.MAX_SAFE_INTEGER;

for(let i=0; i<6; i++){
    for(let j=i+1; j<6; j++){
        for(let k=j+1; k<6; k++){
            let cnt = arr[i]+arr[j]+arr[k];
            ans = Math.min(ans, Math.abs(cnt-Math.abs(sum-cnt)))
        }
    }
}

console.log(ans)