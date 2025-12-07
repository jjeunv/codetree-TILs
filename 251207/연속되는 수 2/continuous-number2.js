const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.

const cnt=[];
let c=0;
for(let i=0; i<n; i++){
    if(i===0){
        c++;
    }if(arr[i]===arr[i-1]){
        c++;
    }else{
        cnt.push(c);
        c=1;
    }
}


console.log(Math.max(...cnt))
