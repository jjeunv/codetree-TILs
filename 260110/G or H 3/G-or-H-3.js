const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(' ').map(Number);
const people = input.slice(1).map((m)=>m.split(' '));

const arr = Array(20000+1).fill(0);

for(let i=0; i<people.length; i++){
  const [idx, c] = people[i];
  arr[Number(idx)] = c==='G'?1:2
}

let ans = 0;
for(let i = 1; i<20001-k; i++){
  let sum = 0;
  for(let j=i; j<=i+k; j++){
    sum+=arr[j];
  }
  ans = Math.max(ans, sum);
}

console.log(ans)


