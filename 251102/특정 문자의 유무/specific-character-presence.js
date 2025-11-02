const fs= require("fs");
const input = fs.readFileSync(0).toString().trim();

let str="";

input.includes("ee")? str+="Yes ": str+="No ";

input.includes("ab")? str+="Yes": str+="No";

console.log(str)