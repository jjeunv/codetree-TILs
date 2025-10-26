const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];

let num = a;

let result="";
while(true){
    if(num>b){
        break;
    }
    result+=(num+" ");

    if(num%2===0){
        num+=3;
    }
    else{
        num*=2;
    }
}

console.log(result);

