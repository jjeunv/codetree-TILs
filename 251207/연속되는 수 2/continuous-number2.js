const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.

const cnt=[];
let c=1;
for(let i=0; i<n-1; i++){
    if(arr[i]===arr[i+1]){
        c++;
    }else{
        cnt.push(c);
        c=1;
    }
}

if(n===1){
    console.log(1)
}else{
console.log(Math.max(...cnt))
}
