const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.

let arr = new Array(101).fill(0);

for(let s of segments){
    let [a,b] = s;
    for(let i=a; i<=b; i++){
        arr[i]+=1;
    }
}

console.log(Math.max(...arr))