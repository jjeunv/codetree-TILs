const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

console.log(str);

for(let i=0 ; i<str.length; i++){
    str = str.slice(-1)+str.slice(0,-1);
    console.log(str);
}