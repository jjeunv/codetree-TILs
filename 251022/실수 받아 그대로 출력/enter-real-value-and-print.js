const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim()).toFixed(2);
console.log(N);