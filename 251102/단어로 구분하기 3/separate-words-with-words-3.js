const fs =require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").reverse();
console.log(input.join("\n"))