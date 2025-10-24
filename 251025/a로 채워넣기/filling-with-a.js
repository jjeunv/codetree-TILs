const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const fir = input[0];
const sec = input.slice(2,input.length-2);
const last = input.slice(input.length-1);


console.log(fir+'a'+sec+'a'+last);