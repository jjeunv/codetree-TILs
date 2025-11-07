const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

function onjeonsu(n){
    if(n%2===0) return false;
    if(n%3===0 && n%9!==0) return false;
    if(n%10===5) return false;
    return true;
}

let cnt =0;
for(let i=a; i<=b; i++){
    if(onjeonsu(i)) cnt++;
}

console.log(cnt);