const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

function min(d,h,m){
    return m+h*60+d*24*60;
}

const res = min(A,B,C)-min(11,11,11);

if(res>0){
    console.log(res);
}else{
    console.log(-1)
}