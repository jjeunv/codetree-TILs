const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const a = input[0];
const b = input[1];

let str = a.slice(0,2)+b.slice(2);
console.log(str)