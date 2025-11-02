const fs= require("fs");
let str = fs.readFileSync(0).toString().trim();

str= str[0]+str.slice(2,str.length-2)+str[str.length-1];

console.log(str)