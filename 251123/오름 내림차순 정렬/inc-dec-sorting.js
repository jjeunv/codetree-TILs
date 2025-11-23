const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.


nums.sort((prev,cur)=>prev-cur);

for(let e of nums){
    process.stdout.write(e+" ");
}
console.log();
for(let e of nums.reverse()){
    process.stdout.write(e+" ");
}