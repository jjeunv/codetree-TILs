const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const a = input[0].split(" ");
const b = input[1].split(" ");

let str="";
str+=a.join("");
str+=b.join("");
console.log(str)