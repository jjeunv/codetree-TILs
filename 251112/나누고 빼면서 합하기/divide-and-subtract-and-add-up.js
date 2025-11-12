const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

let arr = [];

function solve(){
    arr.push(m);
    while(m!=1){
        if(m%2===0){
            m/=2;
        }else{
            m-=1;
        }
        arr.push(m);
    }
}

solve();

let sum=0;
for(let elem of arr){
    sum+=A[elem+1];
}

console.log(sum);