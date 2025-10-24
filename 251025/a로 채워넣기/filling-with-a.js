const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const fir = input[1];
const sec = input[input.length-2];

input = input.replace(fir,'a');
input = input.replace(sec,'a');

console.log(input);