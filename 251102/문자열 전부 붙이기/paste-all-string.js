const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let str="";
for(let i=1; i<input.length; i++){
    str+=input[i];
}
console.log(str)