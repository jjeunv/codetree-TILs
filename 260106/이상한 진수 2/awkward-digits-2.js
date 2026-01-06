const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

// Please Write your code here.

function changeBinary(n){
    let b = n.split('').map(Number);
    let idx = 0;
    for(let i=0; i<b.length; i++){
        if(b[i]===0){
            idx=i;
            break;
        }
    }
    b.splice(idx,1,1);
    return b;
}

function getDecimal(arr){
    let num = 0;
    arr.reverse();
    for(let i=0; i<arr.length; i++){
        num+=2**i * arr[i];
    }
    return num;
}

console.log(getDecimal(changeBinary(a)))
