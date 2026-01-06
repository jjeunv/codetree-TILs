const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0].split('').map(Number);

// Please Write your code here.

function changeBinary(a, idx){
    let b = [...a]
    const n = a[idx]=== 0 ? 1 : 0;
    b.splice(idx,1,n);
    return b;
}

function getDecimal(arr){
    let num = 0;
    arr.reverse();
    for(let i=0; i<arr.length; i++){
        num+=2**i * arr[i];
    }
    return num;
}

let ans = 0;
for(let i=0; i<a.length; i++){
    const changed = changeBinary(a, i);
    const decimalNum = getDecimal(changed);
    ans = Math.max(ans, decimalNum);
}

console.log(ans)
