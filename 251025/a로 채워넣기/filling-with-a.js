const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = input.slice(0,1) +'a' + input.slice(2);
input = input.slice(0,length-2)+'a'+input.slice(length-1);