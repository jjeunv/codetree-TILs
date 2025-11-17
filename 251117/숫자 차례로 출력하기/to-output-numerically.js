const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
let str="";
function solve(n){
    if(n===0){
        return;
    }
    solve(n-1);
    str+=(n+" ");
}

function solve2(n){
    if(n===0){
        return;
    }
    str+=(n+" ");
    solve2(n-1);

}

solve(n);
str+="\n";
solve2(n)

console.log(str)