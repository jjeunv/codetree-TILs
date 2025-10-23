const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

console.log(Number(a>=b));
console.log(Number(a>b));
console.log(Number(b>=a));
console.log(Number(b>a));
console.log(Number(a===b));
console.log(Number(a!==b));