const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let newMatrix ="";

for(let i=0; i<3; i++){
    let newRow = input[i].split(" ").map(num=>num*3);
    newMatrix+=newRow.join(" ");
    newMatrix+="\n";
}

console.log(newMatrix);