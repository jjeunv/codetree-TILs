const fs= require("fs");
const num = Number(fs.readFileSync(0).toString().trim());

console.log(num>=80?'pass':`${80-num} more score`);