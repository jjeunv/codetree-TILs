const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let n = Number(input[1]);

for(let i=0; i<n; i++){
    a+=n;
    console.log(a);
}