const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0];
const b = input[1];

while(a.indexOf(b)!==-1){
    a = a.slice(0,a.indexOf(b))+a.slice(a.indexOf(b)+b.length)
}
console.log(a);