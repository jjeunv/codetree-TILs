const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function sosu(x){
    if(x===1) return false;

    for(let i=2; i<x; i++){
        if(x%i===0) return false;
    }

    return true;
}

function sumEven(x){
    let str= x.toString();
    let sum=0;
    for(let i= 0; i<str.length; i++){
        sum+=Number(str[i]);
    }
    if(sum%2===0){
        return true;
    }
    return false;
}

let cnt=0;

for(let i=A; i<=B; i++){
    if(sosu(i)&&sumEven(i)){
        cnt++;
    }
}

console.log(cnt);