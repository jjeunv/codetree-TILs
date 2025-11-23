const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.


for(let i=0; i<n; i+=2){
    const cnt = arr.slice(0,i+1).sort((a,b)=>a-b);
    process.stdout.write(cnt[i/2]+" ");
}