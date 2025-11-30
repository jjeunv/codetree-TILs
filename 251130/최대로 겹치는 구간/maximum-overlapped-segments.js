const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input.shift());
const lines = input.map((l)=>l.trim().split(" ").map(Number));

let arr = new Array(201).fill(0);

for(let line of lines){
    let [s,e] = line;
    for(let i=s+100; i<e+100; i++){
        arr[i]+=1;
    }
}

console.log(Math.max(...arr))