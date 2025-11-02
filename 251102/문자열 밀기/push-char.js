const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

str = str.slice(1)+str[0];

console.log(str)