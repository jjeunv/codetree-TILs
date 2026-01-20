const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);

let ans = 0;

for(let i=0; i<n; i++){ 
    let num1 = nums[i]; // 폭탄의 번호
    for(let j=i+1; j<n; j++){
        let num2 = nums[j]; // 비교할 폭탄의 번호
        if(num1===num2 && j-i===k){
            ans = Math.max(ans, num1);
        }
    }
}

console.log(ans);