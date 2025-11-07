const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);
// Please Write your code here. 

function num(a,b){
    return a**b;
}

console.log(num(a,b))