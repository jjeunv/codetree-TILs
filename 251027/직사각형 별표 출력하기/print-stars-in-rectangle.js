const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const n = input[0];
const m = input[1];

for(let i=0; i<n; i++){
    let star = "";
    for(let j =0; j<m; j++){
        star+="* ";
    }
    console.log(star);
}