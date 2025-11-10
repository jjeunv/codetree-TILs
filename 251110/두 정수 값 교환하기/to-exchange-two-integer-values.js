const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

function swap(a,b){
    [a,b]=[b,a];
    return [a,b];

}
[n,m] = swap(n,m);

console.log(n,m);

