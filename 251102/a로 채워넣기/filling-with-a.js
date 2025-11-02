const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

input.splice(1,1,'a');
input.splice(input.length-2,1,'a');

console.log(input.join(""))