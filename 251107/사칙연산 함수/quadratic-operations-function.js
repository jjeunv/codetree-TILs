const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

function sum(a,c){
    return a+c;
}

function sub(a,c){
    return a-c;
}

function mul(a,c){
    return a*c;
}

function div(a,c){
    return parseInt(a/c);
}

if(o==='+'){
    console.log(`${a} + ${c} = ${sum(a,c)}`);
}else if(o==='-'){
   console.log(`${a} - ${c} = ${sub(a,c)}`);
}else if(o==='*'){
   console.log(`${a} * ${c} = ${mul(a,c)}`);
}else if(o==='/'){
   console.log(`${a} / ${c} = ${div(a,c)}`);
}else{
    console.log('False');
}