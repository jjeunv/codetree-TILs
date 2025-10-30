const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let arr = input.split(":").map(Number);
console.log(`${arr[0]+1}:${arr[1]}`)