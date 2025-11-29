const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

let nums=[];
while(n!=0){
    nums.push(n%2);
    n=Math.floor(n/2);
}

nums.reverse();

console.log(nums.join(""))