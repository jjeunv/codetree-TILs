const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.

function min(a,b,c){
    if(a<=b && a<=c){
        return a;
    }else if(b<=c && b<=a){
        return b;
    }else{
        return c;
    }
}

console.log(min(a,b,c));