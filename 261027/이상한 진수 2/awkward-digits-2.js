const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let str = input[0];

function getDecimal(num){
    let dec = 0;

    for(let i=0; i<num.length; i++){
        dec = (2*dec + Number(num[i]));
    }

    return dec;
}

let maxNum = 0;

for(let i=0; i<str.length; i++){
    str = str.slice(0, i) + (str[i]==='0'?'1':'0') + str.slice(i+1);
    
    maxNum = Math.max(maxNum, getDecimal(str));

    str = str.slice(0, i) + (str[i]==='0'?'1':'0') + str.slice(i+1);
}

console.log(maxNum);