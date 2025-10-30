const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ").map(Number);

let a = input[0];
let b = input[1];
let c = input[2];

let str = ""
let max = 100;

if(a<max){
    max =a;
}

if(b<max){
    max = b;
}

if (c<max){
    max = c;
}
if(a===max){
    str+="1 "
}else str+="0 "

if(a==b && b===c){
    str+="1"
}else str+="0"

console.log(str)