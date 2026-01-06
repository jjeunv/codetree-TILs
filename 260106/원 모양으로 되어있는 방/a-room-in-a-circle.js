const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let ans = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){

    let curArr = [...arr];
    for(let j=0; j<i; j++){
        const element = curArr.shift();
        curArr.push(element);
    }

    let num = 0;
    for(let j=0; j<n; j++){
        num+=curArr[j]*j;
    }

    ans = Math.min(ans, num);
}

console.log(ans)