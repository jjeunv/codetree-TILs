const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

const arr = Array(101).fill(0);

for(let i=a; i<b; i++){
    arr[i]=1;
}
for(let i=c; i<d; i++){
    arr[i]=1;
}

let cnt = 0;
for(let i=0; i<101; i++){
    if(arr[i]===1) cnt+=1;
}

console.log(cnt);