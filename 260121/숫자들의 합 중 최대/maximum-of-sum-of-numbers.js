const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

let ans = 0;
for(let i=x; i<=y; i++){
    const nums = Array.from(String(i), Number);
    let sum = 0;
    nums.forEach((num)=>{
        sum+=num;
    })
    ans = Math.max(ans, sum);
}

console.log(ans);